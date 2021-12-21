import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient(
    {
        profile: 'randalowner',
        region: 'us-east-1',
        secretAccessKey: 'IAuyxaUv5fr+v35vhVUp7Q/hSfDTz6vEQaysWPxU',
        accessKeyId: 'AKIAR7ZO2XE7BVB33GFW',
        apiVersion: 'latest'
    })
AWS.config.update(docClient);

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
export const Organize = (userN, email, passwd) => {

    const userData = {
        userid: userN,
        Email: email,
        Code: passwd
    }
    putData('ConferenceRoomUsers', userData);
}
