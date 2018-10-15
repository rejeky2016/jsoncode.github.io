jQuery('table').on('input', function() {
  title = jQuery("#mt-title").val();
  description = jQuery("#mt-description").val();
  pageURL = jQuery("#mt-pageurl").val();
  imageURL = jQuery("#mt-imageurl").val();
  site = jQuery("#mt-site").val();
  alt = jQuery("#mt-alt").val();
  appID = jQuery("#mt-appid").val();
  username = jQuery("#mt-username").val();
  
  part0 = '<title>' + title + '</title>\n';
  part1 = '<meta name="description" content="' + description + '">\n';
  part2 = '<meta property="og:title" content="' + title + '">\n';
  part3 = '<meta property="og:description" content="' + description + '">\n';
  part4 = '<meta property="og:url" content="' + pageURL + '">\n';
  part5 = '<meta property="og:image" content="' + imageURL + '">\n';
  
  part6 = '<meta property="og:site_name" content="' + site + '">\n';
  part7 = '<meta property="fb:app_id" content="' + appID + '">\n';
  part8 = '<meta name="twitter:card" content="summary_large_image">\n';
  part9 = '<meta name="twitter:image:alt" content="' + alt + '">\n';
  part10 = '<meta name="twitter:site" content="' + username + '">\n';
  
  if (site == "") { part6 = "" };
  if (appID == "") { part7 = "" };
  if (alt == "") { part9 = "" };
  if (username == "") { part10 = "" };

  jQuery("textarea").html(part0 + part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8 + part9 + part10);
});

jQuery('button').on('click', function() {
  document.querySelector("#meta-tags").select();
  document.execCommand('copy');
});
