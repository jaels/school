(function () {


    var templates = document.querySelectorAll('script[type="text/handlebars"]');

    Handlebars.templates = Handlebars.templates || {};


    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });


    $('#go-button').on('click',search);


    function search() {
        var username = $("#typing-field").val();
        $.ajax({
            url: 'https://api.github.com/users/'+ username + "/repos",
            method: 'GET',
            data: {
                type: 'all'
            },
            success: function(data) {
                var obj;
                var newArr = [];
                var commitsArr = [];
                var commitsObj;

                for (var i=0;i<data.length;i++){
                    obj={};
                    obj.pic = data[i].owner.avatar_url;
                    obj.repoName = data[i].name;
                    obj.fullRepoName = data[i].full_name;
                    obj.commits = data[i].commits_url;
                    obj.owner = data[i].owner.login;
                    obj.id = i;

                    newArr[i] = obj;
                }
                var location;
                $("#results").append(Handlebars.templates.resultsScript({newArr: newArr}));

                $(".fullRepoName").on("click", function(e) {
                    $(".results").empty();

                    var chosenRepo = e.target;

                    var pressedRepo = e.target.innerHTML;
                    for (var i=0;i<newArr.length;i++) {
                        if(newArr[i].fullRepoName===pressedRepo) {
                            location=i;
                        }
                    }

                    var number;


                    $.ajax({
                        url: 'https://api.github.com/repos/' + newArr[location].owner + "/" + newArr[location].repoName + '/commits',
                        method: 'GET',
                        data: {
                            type: 'all'
                        },
                        success: function(data1) {
                            if (data1.length>10) {number=10;}
                            else {number=data1.length;}
                            if (commitsArr.length>0){
                                commitsArr=[];
                            }
                            for(var i=0;i<number;i++) {
                                commitsObj={};
                                commitsObj.message = data1[i].commit.message;
                                commitsArr.push(commitsObj);
                            }

                            $("#"+location).append(Handlebars.templates.commitsScript({commitsArr: commitsArr}));



                        }

                    });

                });


            }

        });


        $('#go-button').on('click',function() {
            $("#results").empty();
            console.log("hey");
            search();

        });



    }








})();
