    import axios from 'axios';
    import twit from 'twitter-node-client';

    let Twitter = twit.Twitter

    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "ZTrmYfZGNLCoZ7TAnuOms9Iws",
        "consumerSecret": "xPKBHAmhQECeSaiGpXFlK0f6nMbGkU9WULJ6b4ultdmhV7ps6s",
        "accessToken": "449242020-NLbr9CxpkatatU1W3pvN7iYhhrzLV2Xmif6LC7Gj",
        "accessTokenSecret": "GiqiNZ9rn2lTiR5nlj01Kpe2GF40pWrIZQQ0axNFyi4us",
        "callBackUrl": "http://localhost.com"
    };

    let twitter = new Twitter(config);

    function getUserInfo(username){
        return twitter.getUser('/users/show.json',{ 'screen_name': username}, error, 
            function (data) {
                JSON.parse(data);
                done();
            });
    };


    function getUserTimeline(username){
        return twitter.getUserTimeline('/statuses/user_timeline.json',{ 'screen_name': username, count: '10'}, error, 
            function (data) {
                expect(JSON.parse(data).length).toEqual(10);
                done();
            });
    };

    let helpers = {
        getTwitterInfo(username){
            return axios.all([getUserInfo(username), getUserTimeline(username)])
            .then((arr) => {
                return {
                    user: arr[0].data,
                    timeline: arr[1].data
                }
            });

        }
    };

    export default helpers;





















