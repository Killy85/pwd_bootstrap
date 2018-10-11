                // Initialize and add the map
                function initMap() {
                  // The location of Uluru
                  var uluru = {lat: 47.2228721, lng: -1.5866655};
                  // The map, centered at Uluru
                  var map = new google.maps.Map(
                      document.getElementById('map'), {zoom: 4, center: uluru});
                  // The marker, positioned at Uluru
                  var marker = new google.maps.Marker({position: uluru, map: map});
                }

                function toggleView(){
                    var list = $('#listFlat');
                    var map = $('#mapRow');
                    
                    if(list.hasClass("col-sm-8")){
                        list.removeClass("col-sm-8");
                        map.addClass("col-sm-8");
                        map.show()
                        list.hide()
                    }else {
                        map.removeClass("col-sm-8");
                        list.addClass("col-sm-8");
                        list.show()
                        map.hide();
                    }
                    console.log(map.css('display'))
                    console.log(list.css('display'))
                }

                function resetShow(val){
                    if(val.matches){
                        var list = $('#listFlat');
                        var map = $('#mapRow');
                        list.show()
                        map.show()
                    }
                }

                function switchView(test){
                    var list = $('#listFlat');
                    var map = $('#mapRow');
                    var map_toggle = $('#list_toggle');
                    var list_toggle = $('#map_toggle');

                    if(test){
                        list.removeClass("col-lg-5")
                        map.removeClass("col-lg-5")
                        map.addClass("col-lg-10")
                        list.hide()
                        map_toggle.removeClass("active")
                        list_toggle.addClass("active")
                        
                    } else {
                        map.removeClass("col-lg-10")
                        map.addClass("col-lg-5")
                        list.addClass("col-lg-5")
                        list.show()      
                        map_toggle.addClass("active")
                        list_toggle.removeClass("active")
                    }
                }
                function hideMap(varMap){
                    if(varMap.matches){
                        var map = $('#mapRow');
                        map.hide()
                    }
                }

            var x = window.matchMedia("(min-width: 992px)")
            resetShow(x)
            x.addListener(resetShow) 
            var mapShowed = window.matchMedia("(max-width: 992px)")
            hideMap(mapShowed)
            mapShowed.addListener(hideMap)