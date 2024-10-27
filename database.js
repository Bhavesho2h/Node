const { MongoClient } = require('mongodb');


const url = "mongodb+srv://NamasteDev:Admin%40321@cluster0.7y9bw.mongodb.net/";


async function main(){
    


    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log('server connection successfull');
        const db = client.db('HelloWorld');
        const users = db.collection('User');

        // const task = await db.collection('User').insertOne({
        //     firstName:'Bhavesh',
        //     lastName: 'Purohit',
        //     age: '23',
        //     phoneNumber: '9054814531'
        // })
        // console.log(task);
       
        const response =await  users.deleteMany( { firstName: "Bhavesh" } );
        console.log(response);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);