window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-197873382-1"); //Google Analytics
gtag("config", "AW-607046291"); //Google Ads Conversion Tracking

//Google Ads Conversion Tracking Function
function gtag_report_conversion(url) {
  var callback = function() {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-607046291/YpiNCPjFzbECEJOVu6EC",
    event_callback: callback
  });
  return false;
}
