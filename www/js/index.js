/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.amendLinks('external-link');
    },

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName(className);

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                window.open(''.concat(this.href), '_blank');
            }


        }
    }
            //starcash menu close
            function closeFBShare() {
                //e.preventDefault();
                document.getElementById("fbshare").style.display = 'none';
            }

            ///ad stuff

            var visible = 0;
            var visible2 = 0;

            var inter1 = document.getElementById("inter1");
            var interCount = document.getElementById("interCount");



            var timerThis2 = 0;

            var countStart = 10;
            setInterval(function () {
                timerThis2++;

                if (visible2 == 1 && countStart < 1) {
                    inter1.style.display = "none";
                    visible2 = 0;
                    countStart = 10;
                }

                if (visible2 == 0 && visible == 0 && timerThis2 > 10) {

                    countStart = 15
                    visible2 = 1;
                    timerThis2 = 0;


                    inter1.style.display = "block";
                    interCount.innerHTML = countStart;
                }
                if (visible2 == 1) {
                    countStart = countStart - 1;
                    interCount.innerHTML = countStart;
                    if (countStart < 1) {
                        inter1.style.display = "none";
                        timerThis2 = 0;

                    }
                }

            }, 1000);
};

app.initialize();