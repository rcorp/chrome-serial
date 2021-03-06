<!DOCTYPE html>
<html >
<head>

	<link rel="stylesheet" href="../_static/js/dojo/../dijit/themes/claro/claro.css">
	
	<script>dojoConfig = {parseOnLoad: true}</script>
	<script src='../_static/js/dojo/dojo.js'></script>
	
	<script>
dojo.require("dijit.form.Form");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.ValidationTextBox");
	</script>
</head>
<body class="claro">
    <form data-dojo-type="dijit/form/Form" id="myForm" data-dojo-id="myForm"
    encType="multipart/form-data" action="" method="">
    <label for="name">Name:</label>
    <input data-dojo-type="dijit/form/ValidationTextBox"
        type="text"
        id="name"
        name="name"
        value="your name"
        trim="true"
        maxLength="30" />

    <div data-dojo-type="dijit/form/Button">
        Submit
        <script type="dojo/method" data-dojo-event="onClick" data-dojo-args="evt">
            // We are using dojo.xhrGet in this example, but
            // you can also use dojo.xhrPost or dojo.xhrPut.
            dojo.xhrGet({
                // The target URL on your webserver:
                url: "staging.ramanancorporation.com",

                // The form node, which contains the
                // to be transferred form elements:
                form: "myForm",

                // The used data format.  Text is the most basic, no processing is done on it.
                handleAs: "text",

                // Timeout in milliseconds:
                timeout: 5000,

                // Event handler on successful call:
                load: function(response, ioArgs){
                    // do something
                    // ...
                    dojo.byId("results").innerHTML = "Form submitted successfully.";

                    // return the response for succeeding callbacks
                    return response;
                },

                // Event handler on errors:
                error: function(response, ioArgs){
                    debug.dir(response);
                    dojo.byId("results").innerHTML = "Form submission failed.";

                    // return the response for succeeding callbacks
                    return response;
                }
            });
        </script>
    </div>
</form>
<br>
<b> Submission results:</b>
<br>
<div id="results"></div>
</body>
</html>