import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient(
    {
        region: 'us-east-1'
    })


export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

export const putData = (tableName , data) => {
    var params = {
        TableName: tableName,
        Item: data
    }
    
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}
export const Organize = (userN, firstN, lastN, email, passwd) => {

    const userData = {
        userid: userN,
        First: firstN, 
        Last: lastN,
        Email: email,
        PWD: passwd
    }
    putData('ConferenceRoomUsers', userData);
}
