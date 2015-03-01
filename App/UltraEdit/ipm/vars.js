var langStr = 'en';
var ueNewPrice = "$59.95";
var ueUpgradePrice = "$29.95";
var ueUcBundleNewPrice = "$89.95";      //new bundle cost
var ueUcBundleRetailPrice = "$109.95";   //bundle retail price
var ueUCBundleYouSavePercentage = "40% on UC";
var ueUpgradeToUeUcBundlePrice = "$59.95";
var strReminderText = 'Days Remaining:';

var strTopRightBlockContent = 
    '<p class="register_title">Register</p>'+ 
    '<p><img src="images/uebox_sm.gif" alt="UltraEdit" border="0" class="uebox" />Register for only: <span class="price" id="ueNewPrice">$59.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'BuyUE\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+ 
    '<p class="upgrade_text">Upgrade: <span class="price" id="ueUpgradePrice">$29.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'UpgradeUE\', langStr); return false;" target="_blank"><p class="upgrade_button">UPGRADE</p></a>';
                  
var strBottomRightBlockContent = 
    '<p class="register_title">UE/UC </p>'+ 
    '<p><img src="images/ue_uc_box.gif" alt="UltraEdit UltraCompare Bundle" border="0" class="bundlebox" />Register both for only: <span class="price" id="ueUcBundleNewPrice">$89.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'BuyUEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+
    '<p class="save_on_uc_text">Save 40% on UC!</p> ';

var strHeaderSubText= 
    '<h2>This is an unregistered program. </h2>' +
    '<p>You are using this application on a free trial basis. </p> ';

var strUpgradeReminderHeaderSubText = 
    '<h2>Your complimentary upgrade period has expired</h2> ' +
    '<p>Upgrade today, get another year of free upgrades, plus save 50%</p>';
    
var strStdTopHeadline = 'UltraEdit Trial Reminder';
var strHurryTopHeadline = 'Your Trial is Almost Over';
var strExpiredTopHeadline = 'Uh Oh... Your Trial Expired';
var strUpgradeReminderTopHeadline = 'License Renewal Reminder';

                          
// ----- DIALOG CONTENT ---------//     
var defaultContent =
    '<h2>Thank You for Evaluating UltraEdit</h2>'+ 
    '<p class="subtext">You are using this application on a free trial basis</p>'+ 
    '<p>This is an unregistered copy of UltraEdit. If you continue use this program, please purchase a license. </p>'+ 
    '<p><a href="#" onClick="purchaseLink(\'BuyUE\', langStr); return false;" target="_blank">Click here to register</a></p>'+ 
    '<p style="clear: all"><b>Visa, MasterCard, Amex accepted</b></p>'+ 
    '<p>IDM Computer Solutions, Inc.<br />5559 Eureka Dr. Ste. B<br />Hamilton, OH 45011<br />Fax: (513) 892-8600<br />Email: <a href="mailto:idm@idmcomp.com" target="_blank">idm@idmcomp.com</a></p>'+ 
    '<p><a href="#" onClick="openLink(\'http://www.ultraedit.com/company/contact_us.html\'); return false;" target="_blank">Contact us</a> for questions.</p>';
    

var benefitsContent =
		'<h2>Benefits of Paid Registration</h2> '+
    '<div class="benefits"> '+
    '<p><span class="subtext">Unlimited Lifetime Support</span><br />'+
    'World class tech support - typical response time: 30 min or less.</p> '+
    '<p><span class="subtext">One Year of FREE Upgrades</span><br />'+
    'Registration entitles you to one year of complimentary upgrades which includes all major and minor releases.</p> '+
    '<p><span class="subtext">Community Benefits</span><br />'+
    'Over 2 million active users, rich online resources, power tips, user-driven development model, monthly newsletter, forums, and more... </p> '+
    '</div> <!-- end benefits -->';    
                     
                     
var welcomeContent =
		'<h2>Thank You for Evaluating UltraEdit</h2>'+
		'<p>Maximize your productivity with the IDM user community resource center - including: support, downloads, news, and more...</p>'+
		'<div class="powertips">'+
		'<p><span class="resource_title">Power Tips/Tutorials</span><br />'+
		'"How-tos" for the latest application features, as well as in-depth tutorials on existing features.</p>'+
		'</div>'+
		'<div class="tech_support">'+
		'<p><span class="resource_title">Tech Support</span><br />'+
		'Got a question?  Get an answer!  Utilize your support resources  to make your use of IDM software easier.</p>'+
		'</div>'+
		'<div class="forums">'+
		'<p><span class="resource_title">User-to-user Forums</span><br />'+
		'Join the forums to meet/interact with many other IDM product enthusiasts - share a tip, get advice, and more.</p>'+
		'</div>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/resources.html\'); return false;" target="_blank">Visit the resource center</a></p>';


var findAndReplaceContent =
		'<img src="images/find_dialog.gif" alt="Find Dialog" border="0" class="tip_screenshot" />'+
		'<h2>Find/Replace</h2>'+
		'<p class="subtext">This powerful feature allows you to find/replace text across a single file, multiple files, and more...</p>'+
		'<p>Access the find/replace options in the Search menu or by using the respective hotkeys - CTRL+F for Find, CTRL+R for replace.  You may also use the find/replace in files features which allow you to search/replace across directories of files on disk.</p>'+
		'<p>Some of the more advanced find/replace options include regular expressions, find and replace in files, search in column, and so much more... </p>'+
		'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/find_replace.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var projectsContent =
		'<img src="images/projects_dialog.gif" alt="Projects" border="0" class="tip_screenshot" />'+
		'<h2>Projects</h2>'+
		'<p class="subtext">Group and manage your related files and folders with Projects.</p>'+
		'<p>Why use a Project? Whether you are developing an application, managing data files, or even keeping track of "to-dos", Projects offer a convenient method of grouping and managing your related files.</p>'+
		'<p>What\'s more, Projects are integrated into the framework of UltraEdit making it easier to perform other common tasks - such as replace in all Project files. Click the link below to learn how to create a Project, how to add/remove files to a Project, and more!</p>'+
		'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/group_files_and_folders_with_projects.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var diffFilesAndFoldersContent =
		'<img src="images/uc_dialog.gif" alt="Compare files and folders" border="0" class="tip_screenshot" />'+
		'<h2>Diff Files/Folders</h2>'+
		'<p class="subtext">Comparing files and folders in UltraEdit is a snap thanks to UltraCompare!</p>'+
		'<p>UltraEdit comes with UltraCompare Lite for basic diff tasks such as comparing files and folders and identifying differences. </p>'+
		'<p>However, if you upgrade to UltraCompare Professional, you will enjoy a more complete feature set. UltraCompare Professional includes 2 and 3-way compare, merge differences, zip archive compare, profiles, ignore options, sessions, Word doc compare, and more...</p>'+
		'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/compare_files_folders.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var columnModeContent =
		'<div class="main_inner_div">'+
		'<img src="images/column_mode_icon.gif" alt="Column Mode" border="0" class="tip_screenshot" />'+
		'<h2>Column Mode</h2>'+
		'<p class="subtext">Column Mode... One of UltraEdit\'s most convenient features! '+
		'<p>Column Mode changes the way you select text in the editor allowing you to select columns and rows of text as opposed to only selecting rows. </p>'+
		'<p>Want to try Column Mode?  Simply toggle in and out of Column Mode using ALT+C (or from the toolbar/menu) and select text vertically/horizontally.</p>'+
		'<p>Column Mode can also be used for other formatting operations such as left/right justify, insert number, sum column, and more... </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/column_mode.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var bookmarksContent =
		'<img src="images/bookmarks_icon.gif" alt="Bookmarks" border="0" class="tip_screenshot" />'+
		'<h2>Bookmarks</h2>'+
		'<p class="subtext">Simplify your workflow using Bookmarks...</p>'+
		'<p style="clear: both">Bookmarks are a convenient way to "save" an important location in your file or code.  If you want to set a bookmark simply press CTRL + F2; to jump to the next available bookmark press F2; to jump to the previous bookmark press ALT + F2.</p>'+
		'<p>You can use the Bookmark Viewer to quickly see (and navigate to) the bookmarks in the active document as well as the bookmarks in all open files. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/bookmarks.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var addWordfileContent =
		'<img src="images/add_wordfile_icon.gif" alt="Add a Wordfile" border="0" class="tip_screenshot" />'+
		'<h2>Add a Wordfile</h2>'+
		'<p class="subtext">Add syntax highlighting for other languages by adding wordfiles</p>'+
		'<p>UltraEdit natively supports 12 commonly-used languages; however, you can add or remove languages by simply modifying the wordfile directory.</p>'+
		'<p>Since UltraEdit\'s syntax highlighting is configurable (based on the wordfile) you can add syntax highlighting support for your desired language from the hundreds of wordfiles available for download from our site.</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/add_a_wordfile.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var htmlPreviewContent =
		'<img src="images/browser_preview_icon.gif" alt="HTML Preview" border="0" class="tip_screenshot" />'+
		'<h2>HTML Preview</h2>'+
		'<p class="subtext">Visually inspect your HTML with the integrated browser preview</p>'+
		'<p>What would make editing HTML easier?  Convenient access to HTML preview. If you are coding html, then you will definitely want this...</p>'+
		'<p>Simply edit your html file, then toggle the "Browser Preview" from the main toolbar or from the View menu. When you\'re done previewing your changes, toggle the Browser Preview off... It\'s that easy!</p> '+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/integrated_html_preview.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var environmentsContent =
		'<img src="images/environment_icon.gif" alt="Environments" border="0" class="tip_screenshot" />'+
		'<h2>Environments</h2>'+
		'<p class="subtext">Switch tasks on-the-fly with TaskMatch Environments</p>'+
		'<p>What is an Environment? An Environment allows you to quickly toggle between editor layouts so as to allow you the ability to switch menus, toolbars, dockable windows, customized templates, etc. based on your tasks/needs.</p>'+
		'<p>Environments are a fantastic feature because they allow you to switch between configuration/options in a single click rather than configuring each item individually. Don\'t like the default Environments? No problem, you can customize them or create your own!</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/environments.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var cssStyleBuilderContent =
		'<img src="images/style_builder.gif" alt="CSS style builder" border="0" class="tip_screenshot" />'+
		'<h2>CSS Style Builder</h2>'+
		'<p class="subtext">Use the CSS style builder to build your style sheets quickly and easily</p>'+
		'<p>The CSS style builder can build styles for background, font/text, and edge/positioning.  You can set these values as needed, then simply click the "OK" button to insert them into the active document!</p>'+
		'<p>To invoke the CSS style builder, click the "Style Builder" button on the TOOLS toolbar. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/css_style_builder.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var diffFilesAndFoldersContent =
		'<img src="images/uc_dialog.gif" alt="Compare files and folders" border="0" class="tip_screenshot" />'+
		'<h2>Diff Files/Folders</h2>'+
		'<p class="subtext">Comparing files and folders in UltraEdit is a snap thanks to UltraCompare!</p>'+
		'<p>UltraEdit comes with UltraCompare Lite for basic diff tasks such as comparing files and folders and identifying differences. </p>'+
		'<p>However, if you upgrade to UltraCompare Professional, you will enjoy a more complete feature set. UltraCompare Professional includes 2 and 3-way compare, merge differences, zip archive compare, profiles, ignore options, sessions, Word doc compare, and more...</p>'+
		'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/compare_files_folders.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var mergeDifferencesContent =
		'<img src="images/uc_merge_icon.gif" alt="Merge files and folders" border="0" class="tip_screenshot" />'+
		'<h2>Merge Differences </h2>'+
		'<p class="subtext">Synchronize differences between your files with UltraCompare Professional</p>'+
		'<p>Not only does UltraCompare Pro support two-way and three-way compare; it also supports merging differences between them!</p>'+
		'<p>UltraCompare Professional features a powerful set of merge options that give you total control over the differences between your files and folders. Merging differences is as simple as a click of the mouse.</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultracompare/block_line_mode_merge.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var findAndReplaceInFilesContent =
		'<img src="images/replace_in_files_icon.gif" alt="Replace in Files" border="0" class="tip_screenshot" />'+
		'<h2>Find/Replace in Files</h2>'+
		'<p class="subtext">Use Find/Replace on an entire directory structure...</p>'+
		'<p>The Find in Files/Replace in Files options are accessible under the Search menu. These powerful search options allow you to search for strings or text within multiple files contained in a directory.</p>'+
		'<p>With Find in Files/Replace in Files, you have all of the features available to you with Find/Replace plus the option to search subdirectories, Project/Favorite Files, specified file types, subdirectory names to ignore, and more. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/find_replace.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var sortContent =
		'<img src="images/sort_icon.gif" alt="Sort" border="0" class="tip_screenshot" />'+
		'<h2>Sort Your Data</h2>'+
		'<p class="subtext">Did you know that you can sort the data in your text file?</p>'+
		'<p>UltraEdit\'s sorting makes it easy to read and manipulate your data!  Sorting can help you read log files, sort fields in flat file databases, or can even be used for removing duplicate entries/lines in a file. </p>'+
		'<p>The powerful sort engine allows you to sort file data based on several "keys" (columns). You can sort using the basic or advanced options. Click the link below to learn more about sorting in UltraEdit. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/advanced_column_based_sort.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var linkLocalAndRemoteContent =
		'<img src="images/link_local_remote.gif" alt="Link Your Local and Remote Directories" border="0" class="tip_screenshot" />'+
		'<h2>Link Local/Remote Folders</h2>'+
		'<p class="subtext">Link a local directory to your live/remote directory using projects and FTP/SFTP!</p>'+
		'<p>Projects are incredibly useful because they allow you to organize and group your files and folders.   </p>'+
		'<p>While Projects can be used to organize files and folders, they also make other common tasks easier. You can link your Project with an FTP/SFTP account which gives you the ability to link a local directory to a remote directory - making upload, download, and sync operations a snap!</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/sync_local_to_remote.html\'); return false;" target="_blank">Click here to learn more.</a></p>';


var ftpSftpContent =
		'<img src="images/ftp_dialog.gif" alt="FTP Browser" border="0" class="tip_screenshot" />'+
		'<h2>FTP/SFTP Support</h2>'+
		'<p class="subtext">Access files &amp; folders on remote servers using FTP/SFTP.</p>'+
		'<p>Whether you are using UltraEdit for development or basic text editing, you may need FTP/SFTP.</p>'+
		'<p>Configure your FTP account and take advantage of the built-in FTP/SFTP open and save options as well as the FTP browser.</p>'+
		'<p>You may also need to compare what files/folders have changed on your server.  No problem, just use UC Pro\'s built in FTP/SFTP Compare.</p>'+
		'<p class="powertip_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/configure_ftp.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var scriptingContent =
		'<img src="images/scripting_icon.gif" alt="Scripting" border="0" class="tip_screenshot" />'+
		'<h2>Scripting</h2>'+
		'<p class="subtext">Work smarter not harder... Automate your tasks with Scripting.</p>'+
		'<p>Scripting combines the flexibility of JavaScript with the power of the UltraEdit editing environment to give you a dynamic method for automating your tasks.  Want to learn more about scripting?  The Help provides a full list of the available scripting commands and properties.</p>'+
		'<p>After you write your script, simply load it into the Script List in the Scripting menu and off you go. If you want to learn more about Scripting click the link below to learn the basics of UltraEdit\'s scripting engine. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/scripting_engine_tutorial.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var templatesContent =
		'<img src="images/templates.gif" alt="templates" border="0" class="tip_screenshot" />'+
		'<h2>Templates</h2>'+
		'<p class="subtext">Create and save frequently used text with templates.</p>'+
		'<p>Create custom templates and insert commonly-used code, text, etc. into your document with a click.</p>'+
		'<p> While you can create simple templates containing just text, you can also include dynamic variables in your templates for the date, time, file name, and more!  </p>'+
		'<p>You can create/modify your templates in the Advanced menu.  </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/custom_templates.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var encryptDecryptContent =
		'<img src="images/encrypt.gif" alt="SSH/Telnet" border="0" class="tip_screenshot" />'+
		'<h2>Encrypt/Decrypt your files</h2>'+
		'<p class="subtext">Secure your sensitive/proprietary data with built-in Encryption.</p>'+
		'<p>UltraEdit\'s built-in encryption provides a quick and easy way to encrypt/decrypt your sensitive data - allowing you to keep your sensitive data secure.  To encrypt a file, simply access the encryption options in the File menu.</p>'+
		'<p>What\'s more, UltraEdit also integrates with UltraSentry to securely delete the original file after encryption. Together, UltraEdit\'s built-in encryption and UltraSentry\'s secure delete provide a complete end-to-end solution for protecting your sensitive data.</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/encrypt_decrypt_text_files.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var sshTelnetContent =
		'<img src="images/telnet.gif" alt="SSH/Telnet" border="0" class="tip_screenshot" />'+
		'<h2>SSH/Telnet</h2>'+
		'<p class="subtext">Perform command line operations with the built-in Telnet/SSH terminal!</p>'+
		'<p style="clear: both">UltraEdit provides a convenient SSH/Telnet Console that allows you to access your server and perform command line operations. Best of all, you can do all this without having to leave the editor!</p>'+
		'<p>The Telnet/SSH Console can be a fixed (docked) window in the editor frame or a floating (undocked) window.</p>			'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/ssh_telnet.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var searchFavoritesContent =
		'<img src="images/search_favorites.gif" alt="Search favorites" border="0" class="tip_screenshot" />'+
		'<h2>Search favorites</h2>'+
		'<p class="subtext">Do you constantly use the same Find and Replace strings... then you need search favorites.</p>'+
		'<p>The Search and Replace favorites feature  allows you to store frequently used find/replace strings. The "Edit Find/Replace Favorites" dialog gives you a convenient method of managing find/replace favorites.</p>'+
		'<p>To add a favorite, simply open a Find or Replace dialog, click the star icon, and select the "Add to Favorites" option. From now on, your Find/Replace string will be available whenever you need it!</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/search_replace_favorites.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var macroContent =
		'<img src="images/macro_icon.gif" alt="Macro" border="0" class="tip_screenshot" />'+
		'<h2>Macros</h2>'+
		'<p class="subtext">How to write a powerful Macro</p>'+
		'<p>What is a Macro?  Macros essentially allow you to record a series of commands and keystrokes and play them back. </p>'+
		'<p style="clear: both">While you can program Macros by hand, the easiest way to write a Macro is to let UltraEdit do the work for you. One of UltraEdit\'s most powerful features is the ability to record, create, and play Macros. </p>'+
		'<p>To record a Macro, use the Quick Record/Record command in the Macro menu.   </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/writing_a_powerful_macro.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var spellCheckerContent =
		'<img src="images/spell_check.gif" alt="Check your spelling" border="0" class="tip_screenshot" />'+
		'<h2>Spell Check</h2>'+
		'<p class="subtext">Worried about misspelling words?  </p>'+
		'<p>UltraEdit includes an advanced spell checking engine that includes over 100,000 words with additional support for foreign languages such as: English, Dutch, French, German, Italian, Spanish, and more...</p>'+
		'<p>You can invoke the spell checker from the Edit Menu and it will check the selected text or the complete file (if no text is selected).</p>'+
		'<p>What\'s more, you can also use the Spell As You Type for "real-time" spell checking as you edit. </p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/spell_check.html\'); return false;" target="_blank">Click here to learn more</a></p>';


var keyboardShortcutContent =
		'<img src="images/key_mapping.gif" alt="Keyboard Shortcuts" border="0" class="tip_screenshot" />'+
		'<h2>Keyboard Shortcuts</h2>'+
		'<p class="subtext">Maximize your productivity by customizing your Keyboard Shortcuts.</p>'+
		'<p>As you have probably found during your trial period, almost everything in UltraEdit is customizable and configurable. UltraEdit is designed to be absolutely customizable because your editor simply has to feel like it is a "perfect" fit for your daily computing needs.</p>'+
		'<p>With that in mind, UltraEdit allows you to change/tweak the menu hotkeys and key mappings to suit your preferences.</p>'+
		'<p class="resource_link"><a href="#" onClick="openLink(\'http://www.ultraedit.com/support/tutorials_power_tips/ultraedit/keymapping.html\'); return false;" target="_blank">Click here to learn more</a></p>';



// ----- END DIALOG CONTENT ---------//

// ---- START RIGHT/LEFT CONTENT ----//

var rightSideContent =
    '<img src="images/ue_uc_box_big.gif" alt="UltraEdit UltraCompare Bundle Box" border="0" class="ue_uc_box_big" />'+ 
		'<h2>UE/UC Bundle</h2>'+ 
		'<p class="ue_uc_bundle_offer">Retail: <span class="retail_price" id="ueUcBundleRetailPrice">$109.95</span><br />'+ 
			'You Pay: <span class="price" id="ueUcBundleNewPrice">$89.95</span><br />'+ 
			'You Save: <span class="you_save" id="ueUCBundleYouSavePercentage">50% on UC</span>'+ 
		'</p>'+ 
		'<p style="clear: both">UltraEdit and UltraCompare are fully integrated to give you a total text editing solution. Get the UE/UC solution now and save <span id="ueUCBundleYouSavePercentage"> 50% on UC</span>.</p>'+ 
	  '<div class="register_upgrade_container">'+ 
	    '<div class="best_value">BEST VALUE</div>'+ 
			'<div class="register">'+ 
				'<p class="register_text">Register Both <span class="price" id="ueUcBundleNewPrice">$89.95</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'BuyUEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+ 
			'</div>'+ 
			'<div class="upgrade">'+ 
				'<p class="register_text">UE Upgrade + UC <span class="price" id="ueUpgradeToUeUcBundlePrice">$59.95</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'UpgradeUE2UEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
		'</div>';

var leftSideContent =
    '<img src="images/uebox_big.gif" alt="UltraEdit Box" border="0" class="uebox_big" />'+ 
    '<h2>UltraEdit</h2>'+ 
    '<p>The #1 selling, most powerful, value priced text editor available! The ideal text, HEX, HTML, PHP, C++, and programmer\'s editor!</p>'+ 
    '<div class="bonus">'+ 
      '<p><span class="subtext">One Year of FREE Upgrades</span><br />'+
    	'Registration entitles you to one year of complimentary upgrades which includes all major/minor releases.</p> '+
    '</div>'+ 
    '<div class="register_upgrade_container">'+ 
    '<div class="register">'+ 
    '<p class="register_text">Register For <span class="price" id="ueNewPrice">$59.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'BuyUE\', langStr); return false;" target="_blank"><p class="buy_button">BUY</p></a>'+ 
    '</div>'+ 
    '<div class="upgrade">'+ 
    '<p class="register_text">UE Upgrade<span class="price" id="ueUpgradePrice">$29.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'UpgradeUE\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
    '</div>';


// ---- END RIGHT/LEFT CONTENT ----//


// ---- START RIGHT/LEFT CONTENT FOR UPGRADE REMINDER MESSAGE----//

var upgradeRightSideContent =
    '<img src="images/ue_uc_box_big.gif" alt="UltraEdit UltraCompare Bundle Box" border="0" class="ue_uc_box_big" />'+ 
		'<h2>UE/UC Bundle</h2>'+ 
		'<p class="ue_uc_bundle_offer">Retail: <span class="retail_price" id="ueUcBundleRetailPrice">$109.95</span><br />'+ 
			'You Pay: <span class="price" id="ueUpgradeToUeUcBundlePrice">$59.95</span><br />'+ 
			'You Save: <span class="you_save" id="ueUCBundleYouSavePercentage">50% on UC</span>'+ 
		'</p>'+ 
		'<p style="clear: both">Save 40% on UltraCompare when you bundle it with your upgrade!  Add it all up: Save 50% on your upgrade, save 40% on UltraCompare, plus get 1 year of free upgrades on both products!</p>'+ 
	  '<div class="register_upgrade_container">'+ 
			'<div class="register" style="height: 70px; background-image: url(images/best_value_arrow.gif); background-position: 100% 50%; background-repeat: no-repeat;">'+ 
				'<p style="padding-top: 23px; padding-left: 23px; font-weight: bold">BEST VALUE</p>'+ 
			'</div>'+ 
			'<div class="upgrade">'+ 
				'<p class="register_text">UE Upgrade + UC <span class="price" id="ueUpgradeToUeUcBundlePrice">$59.95</span></p>'+ 
				'<a href="#" onClick="purchaseLink(\'UpgradeUE2UEUCBundle\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
		'</div>';

var upgradeLeftSideContent =
    '<img src="images/uebox_big.gif" alt="UltraEdit Box" border="0" class="uebox_big" />'+ 
    '<h2>UltraEdit</h2>'+ 
    '<p>Want to learn about the newest features in UltraEdit?  <a href="#" onClick="openLink(\'http://www.ultraedit.com/products/ultraedit/new_feature_tour.html\'); return false;" target="_blank">See </a> what\'s new and improved since your last upgrade.</p>'+ 
    '<div class="bonus_upgrade">'+ 
      '<p><span class="subtext">Upgrade Plus... 1 Year of Upgrades!</span><br />'+ 
      'Upgrade to the latest version, plus receive 1 year of <b>free</b> upgrades including all major/minor releases</p>'+ 
    '</div>'+ 
    '<div class="register_upgrade_container">'+ 
    '<div class="register">'+ 
	    '<p style="text-align: left; padding-top: 4px; padding-left: 5px"><strong>Upgrade Pricing</strong><br>'+ 
	    'Registered users receive 50% off <br>retail price!</p>'+ 
    '</div>'+ 
    '<div class="upgrade">'+ 
    '<p class="register_text">UE Upgrade<span class="price" id="ueUpgradePrice">$29.95</span></p>'+ 
    '<a href="#" onClick="purchaseLink(\'UpgradeUE\', langStr); return false;" target="_blank"><p class="buy_button">UPGRADE</p></a>'+ 
    '</div>';


// ---- END RIGHT/LEFT CONTENT FOR UPGRADE REMINDER MESSAGE----//
