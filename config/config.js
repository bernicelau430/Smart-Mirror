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
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "MyCalendar",
						url: "https://calendar.google.com/calendar/ical/bernicelau430%40gmail.com/public/basic.ics"
					}
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
			module: 'MMM-iFrame-Ping',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				url: "https://www.youtube.com/embed/tPO9jxUKIsc&autoplay=1&modestbranding=1&iv_load_policy=3", //url to display
				height:"100%", 
				width:"80%",
				autoRefresh: true, //set to false for video
				updateInterval: 1, //in min. Only if autoRefresh: true
				displayLastUpdate: true,
				width: "100%", // Optional. Default: 100%
				height: "400px", //Optional. Default: 100px
				scrolling: "no" 
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
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
