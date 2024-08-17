jQuery(document).ready(function ($) {
   // Handle click event for custom button
   $(document).on("click", "#newbtn", function (e) {
       e.preventDefault();
       
       // Find the .media-frame-content element
       var mediaFrameContent = $('.media-frame-content');
       if (mediaFrameContent.length) {
           // Hide all divs inside .media-frame-content that are not part of the Media Library
           mediaFrameContent.find('div').not('.image_magic').not('.media-sidebar').not('.uploader-inline').hide();

           // Get the image URL dynamically (for demo, it's hardcoded)
           const imageUrl  = $('#attachment-details-two-column-copy-link')[0].value;
           console.log(imageUrl);

           // Create a new div with class image_magic
           var newDiv = document.createElement('div');
           newDiv.className = 'image_magic';

           // Optionally add some content to the new div
           newDiv.innerHTML = `
               <div class="imagemagic_toolbar">
                   <button id="imagemagic_crop" class="imagemagic_edite_button"><span class ="dashicons dashicons-move"></span>Crop</button>
                   <button id="imagemagic_reisze" class="imagemagic_edite_button"><span class="dashicons dashicons-image-crop"></span>Resize</button>
                   <button id="imagemagic_rotate" class="imagemagic_edite_button"><span class="dashicons dashicons-image-rotate"></span>Rotate</button>
                   <button id="imagemagic_effect" class="imagemagic_edite_button"><span class="dashicons dashicons-admin-settings"></span>Effect</button>
                   <button id="imagemagic_comprese" class="imagemagic_edite_button"><span class="dashicons dashicons-media-archive"></span>Comprese</button>
                   <button id="imagemagic_cancel" class="imagemagic_edite_button">Cancel</button>
                   <button id="imagemagic_save" class="imagemagic_edite_button">Save to media</button>
               </div>
               <div class="imagemagic_image_container">
                 <div class="image_show">
                    <img  id="image_for_edite" src="${imageUrl}" alt="Selected Image">
                 </div>
                 <div class="imagemagic_control_container">
                    <section class="crop_control" style="display:none;">
                       <h2 id="title-functionality">Crop The Image</h2>
                       <hr>
                       <div class="show-info">
                          <div class="croptype">
                            <p>Aspect Ratio:</p>
                            <div class="ratio-control">
                               <input type="number" min="0">
                               x
                               <input type="number" min="0">
                            </div>
                          </div>
                          <div class="croptype">
                            <p>Selection:</p>
                            <div class="slection-control">
                               <input type="number" min="0">
                               x
                               <input type="number" min="0">
                            </div>
                          </div>
                          <div class="croptype">
                            <p>Starting coordinates:</p>
                            <div class="cordinat-control">
                               <input type="number" min="0">
                               x
                               <input type="number" min="0">
                            </div>
                          </div>
                          <div class="croptype">
                               <button id="save-crop">Save Crop</button>
                               <button id="cancel" >cancel</button>
                          </div>
                       </div>
                    </section>
                    <section class="resize_control" style="display:none;">
                       <h2 id="title-functionality">Resize The Image</h2>
                       <hr>
                       <div class="resizetype">
                            <p>Resize Control:</p>
                            <div class="cordinat-control">
                               <input type="number" min="0" placeholder="New Width">
                               x
                               <input type="number" min="0" placeholder="New Height">
                            </div>
                            <div class="resizetype">
                               <button id="save-resize">Save Resize</button>
                               <button id="cancel" >cancel</button>
                          </div>
                       </div>
                    </section>
                    <section class="rotate_control" style="display:none;">
                       <h2 id="title-functionality">Rotate The Image</h2>
                       <hr>
                       <div class="rotatetype">
                            <p>Rotate and Flip Control:</p>
                            <div class="rotate-control">
                               <button><span class="dashicons dashicons-update"></span></button>
                               <button><span class="dashicons dashicons-update-alt"></span></button>
                               <button><span class="dashicons dashicons-image-flip-horizontal"></span></button>
                               <button><span class="dashicons dashicons-image-flip-vertical"></span></button>
                            </div>
                            <div class="rotatetype">
                               <button id="save-resize">Save Rotate</button>
                               <button id="cancel" >cancel</button>
                          </div>
                       </div>
                    </section>
                    <section class="effect_control" style="display:none;">
                       <h2 id="title-functionality">Apply Effects</h2>
                       <hr><div class="effecttype">
                            <p>Effect Control:</p>
                            <div class="effect-control">
                               <button id="effect-brighten">Brighten</button>
                               <button id="effect-darken">Darken</button>
                               <button id="effect-cold">Cold</button>
                               <button id="effect-warm">Warm</button>
                               <button id="effect-contrast">Contrast</button>
                               <button id="effect-blur">Blur</button>
                               <button id="effect-black">Black & White</button>
                               <button id="effect-painting">Painting</button>
                            </div>
                            <div class="effecttype">
                               <button id="save-effect">Save Effect</button>
                               <button id="cancel" >cancel</button>
                          </div>
                       </div>
                    </section>
                    <section class="comprese_control" style="display:none;">
                       <h2 id="title-functionality">Compress The Image</h2>
                       <hr>
                       <div class="compresetype">
                            <p>Comprses Control:</p>
                            <p id="comprses-quality">Quality( 1 - 100 ):</p>
                            <div class="comprese-control">
                               <input id="comprese-value" type="range" min="0" max="100" value="50" step="1">
                               <p id="comprses-value-display">75</p>
                            </div>
                            <div class="compresetype">
                               <button id="save-resize">Save Resize</button>
                               <button id="cancel" >cancel</button>
                          </div>
                       </div>
                    </section>
                 </div>
               </div>
           `;
           // Append the new div to the .media-frame-content element
           mediaFrameContent.append(newDiv);
           $(newDiv).show();

           // change The Title To Edit With ImageMagic
           let title = document.getElementsByClassName('media-frame-title')[1].firstChild;
           title.innerHTML = "Edit With ImageMagic";

       }
   });

   // create functionality for crop
   $(document).on('click', '#imagemagic_crop', function (e) {
       e.preventDefault();
       var selectdivincontrol = $('.imagemagic_control_container');
       selectdivincontrol.find('section').hide(); // Hide all sections
       $('.crop_control').show(); // Show only the crop control
   });
   

   // create functionality for resize
   $(document).on('click', '#imagemagic_reisze', function (e) {
       e.preventDefault();
       var selectdivincontrol = $('.imagemagic_control_container');
       selectdivincontrol.find('section').hide(); // Hide all sections
       $('.resize_control').show(); // Show only the resize control
   });

   // create functionality for rotate
   $(document).on('click', '#imagemagic_rotate', function (e) {
       e.preventDefault();
       var selectdivincontrol = $('.imagemagic_control_container');
       selectdivincontrol.find('section').hide(); // Hide all sections
       $('.rotate_control').show(); // Show only the crop control
   });

   // create functionality for effct
   $(document).on('click', '#imagemagic_effect', function (e) {
       e.preventDefault();
       var selectdivincontrol = $('.imagemagic_control_container');
       selectdivincontrol.find('section').hide(); // Hide all sections
       $('.effect_control').show(); // Show only the crop control
   });

   // create functionality for effct
   $(document).on('click', '#imagemagic_comprese', function (e) {
       e.preventDefault();
       var selectdivincontrol = $('.imagemagic_control_container');
       selectdivincontrol.find('section').hide();
       $('.comprese_control').show(); 
      });
      
      // Create an event for displaying compression quality
      $(document).on('change', '#comprese-value', function(e) {
         e.preventDefault();
         var displayElement = document.getElementById('comprses-value-display'); // Get the DOM element
         var currentValue = this.value; // Get the current value of the slider
         displayElement.textContent = currentValue; // Update the textContent of the element
         
         console.log(displayElement); // Log the element to the console (optional for debugging)
      });
     
     
     

});
