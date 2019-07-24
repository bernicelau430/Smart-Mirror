/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		/*{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
				
				config: {
					compliments: {
						anytime: [
							"Enjoy your day!",
							"How are you?",
							"Are you being productive?"
						]
				}
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "San Francisco",
				locationID: "5391997",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "e176a165b50bcb4bd7e7c6ab664be82e"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "San Francisco",
				locationID: "5391997",  //ID from https://openweathermap.org/city
				appid: "e176a165b50bcb4bd7e7c6ab664be82e"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
  			module: 'MMM-MyCommute',
  			position: 'top_right',
  			config: {
			    apikey: 'AIzaSyDagfSYWuzOWOL3Xh6xJf2sr7FYal37tzs',
			    origin: '1918 31st Ave, San Francisco, CA 94116',
			    startTime: '00:00',
			    endTime: '23:59',
			    destinations: [
      						{
        						destination: 'Lowell High School, 1101 Eucalyptus Dr, San Francisco, CA 94132',
 	        					label: 'Lowell High School',
        						mode: 'driving',
       	 						color: '#8cf0ff',
      						},
     						{
				      		  	destination: 'A. P. Giannini Middle School, 3151 Ortega St, San Francisco, CA 94122',
				   		  	label: 'A. P. Giannini Middle School',
				      		  	mode: 'driving',
							color: '#ff8cdb',
      						},
    						{
				        		destination: 'A. P. Giannini Middle School, 3151 Ortega St, San Francisco, CA 94122',
				        		label: 'A. P. Giannini Middle School',
				        		mode: 'walking',
							color: '#ffee8c',
				      		},
    					  ]
  				}
		},
		{
    			module: 'MMM-AlexaOnOff',
    			config: {
        			devices: [{ 
              			name: "Magic Mirror",
              			on: { 
                			notification: "ONSCREENMENU_PROCESS_ACTION",
                			payload: { actionName:'monitorOn' }
              	    			},
              			off: { 
                			notification: "ONSCREENMENU_PROCESS_ACTION",
                			payload: { actionName:'monitorOff' }
              				},
        				  }]
    				}
 		},
		{
            		module: 'MMM-OnScreenMenu',
            		position: 'bottom_left',
            		config: {
                		touchMode: true,
                		enableKeyboard: true,
                		menuItems: {
		    			monitorOff: { title: "Turn Off Monitor", icon: "television", source: "SERVER" },
		    			refresh: { title: "Refresh", icon: "recycle", source: "LOCAL" },
		    			restart: { title: "Restart MagicMirror", icon: "refresh", source: "ALL" },
		    			reboot: { title: "Reboot", icon: "spinner" },
		    			shutdown: { title: "Shutdown", icon: "power-off"  }
   					    },

   				}
		},
		{
			module: 'MMM-ImageSlideshow',
			position: 'top_left',
			config: {
				imagePaths: ['modules/MMM-ImageSlideshow/exampleImages'],
				randomizeImageOrder: true,
				}
		},*/	

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
