var homeContent = `<h1>HOME</h1><hr>
<section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat in. Dignissim cras tincidunt lobortis feugiat vivamus. Adipiscing at in tellus integer feugiat scelerisque varius. Dui id ornare arcu odio ut sem nulla. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Neque aliquam vestibulum morbi blandit cursus risus at. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Pellentesque sit amet porttitor eget dolor morbi non. Urna condimentum mattis pellentesque id. Gravida in fermentum et sollicitudin ac. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sagittis orci a scelerisque purus semper eget duis at. Vivamus at augue eget arcu dictum varius duis at. Sodales ut etiam sit amet nisl purus in.</p>
    <p>Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Aenean pharetra magna ac placerat vestibulum lectus mauris. Auctor eu augue ut lectus arcu. Mauris vitae ultricies leo integer malesuada. Ut eu sem integer vitae justo eget magna fermentum. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Arcu dui vivamus arcu felis bibendum ut tristique. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Aliquam etiam erat velit scelerisque. Odio facilisis mauris sit amet massa vitae. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Dolor morbi non arcu risus quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ullamcorper a lacus vestibulum sed arcu.</p>
    <p>Urna nunc id cursus metus aliquam eleifend mi in nulla. Pellentesque habitant morbi tristique senectus et netus et. Urna duis convallis convallis tellus id interdum velit laoreet. Bibendum at varius vel pharetra vel turpis. Netus et malesuada fames ac. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Lorem mollis aliquam ut porttitor leo a diam. At in tellus integer feugiat scelerisque varius morbi. Ac turpis egestas sed tempus urna et. Non nisi est sit amet facilisis magna etiam tempor orci. Duis at tellus at urna. Morbi quis commodo odio aenean sed adipiscing diam. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Pharetra massa massa ultricies mi quis. Fringilla urna porttitor rhoncus dolor purus non. Dolor sed viverra ipsum nunc. Nec nam aliquam sem et.</p>
    <p>Vulputate enim nulla aliquet porttitor lacus luctus. Suspendisse sed nisi lacus sed viverra tellus in hac. Varius vel pharetra vel turpis nunc eget lorem dolor. Morbi quis commodo odio aenean sed. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Blandit massa enim nec dui nunc mattis enim ut. Nulla aliquet enim tortor at. Habitant morbi tristique senectus et netus et. At urna condimentum mattis pellentesque id nibh tortor id. Amet dictum sit amet justo donec. Libero volutpat sed cras ornare arcu dui vivamus arcu. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Eget duis at tellus at urna condimentum mattis pellentesque.</p>
</section>`;
var aboutContent = `<h1>ABOUT</h1><hr>
<p>Vulputate enim nulla aliquet porttitor lacus luctus. Suspendisse sed nisi lacus sed viverra tellus in hac. Varius vel pharetra vel turpis nunc eget lorem dolor. Morbi quis commodo odio aenean sed. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Blandit massa enim nec dui nunc mattis enim ut. Nulla aliquet enim tortor at. Habitant morbi tristique senectus et netus et. At urna condimentum mattis pellentesque id nibh tortor id. Amet dictum sit amet justo donec. Libero volutpat sed cras ornare arcu dui vivamus arcu. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Eget duis at tellus at urna condimentum mattis pellentesque.</p>`;
var productsContent = `<h1>PRODUCTS</h1><hr>
<img src="images/pexels-math-90946.jpeg" class="dim">
<img src="images/pexels-pixabay-248412.jpeg">
<img src="images/pexels-pixabay-256198.jpeg">
<img src="images/pexels-wallace-chuck-3587478.jpeg">`;
var contactContent = "<h1>CONTACT</h1><hr><p>123 Baker Street<br>Masonopolis<br>ZH 456780<Br><br><tel>93109792300</tel></p>";



function initListeners () {
    $("nav a").click(function(e) {
        let aID = e.currentTarget.id;
        // console.log("a id " + aID);

        let contentID = aID + "Content";

        $("#app").html(eval(contentID))
    });
}


$(document).ready(function () {
    //alert ("hi");
    initListeners();
    $("#app").html(homeContent);
});