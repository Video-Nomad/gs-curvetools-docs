.. currentmodule:: <index>

#########
Changelog
#########

Version 1.3.16
^^^^^^^^^^^^^^

*28-Nov-2025*

**New Features:**

- Added Reduce and Extend from the Root (Shift + Click)
- Added Reduce and Extend from the Root Hotkeys

**Improvements:**

- Options are now saved as json file in prefs folder (more minor improvements there)
- Better logging handling if user has non-English Maya and Python 2 (unicode handling).

**Bug Fixes:**

- Disabled UV Editor GPU acceleration in Maya 2018-2024 for now. 2025 and 2026 still benefit from faster UV Editor. Will investigate further how to fix 2018-2024.
- Fixed add/fill failing with wrong selection.
- Fixed group and regroup by layer error when wrong curves were selected.
- Fixed scale factor and precision failing if wrong curves were selected.
- Fixed subdivide failing with wrong selection.


Version 1.3.15
^^^^^^^^^^^^^^

*23-Nov-2025*

**Bug Fixes:**

- Fixed a critical bug that prevented Curve Control Window updates on fresh installations due to options mismatch.


Version 1.3.14
^^^^^^^^^^^^^^

*16-Nov-2025*

**New Features:**

- UV Editor UDIM texture support:

    - Properly named textures will now display as UDIM tiles.
    - Select UDIM tile dropdown menu will allow to select any tile from the texture set.
    - Move Selected UVs one tile left/right/up/down.

- UV Editor GPU acceleration. Can be disabled in the options.
- New Settings window to de-clutter the Options Menu.
- New Layer Collection indicator/dropdown menu in Curve Control Window.

**Improvements:**

- Mouse scrolling was disabled for Layer and Collection selectors in Curve Control Window. Can be enabled in the Settings menu.
- Removed Offset attribute as it was broken for some time and unusable.
- Improved UV Editor visuals (better grid drawing, better selection rectangle and Draw rectangle).

**Bug Fixes:**

- Fixed Layer Collections special characters issue. Now Layer Collections can be named using any characters and they will not interfere with Extract and Group functions.
- Profile Graph will now properly be reset to default even if the "Auto" mode is enabled.
- Numerous little bug fixes and code improvements...

Version 1.3.13
^^^^^^^^^^^^^^

*15-Oct-2025*

**Bug Fixes:**

- Bind no longer fails to reset the pivot when binding Cards to an empty curve.
- Bind no longer fails to bind Geometry to an empty curve.
- UV Editor no texture found error was fixed (when texture file was deleted by the user but still present in the file node).


Version 1.3.12
^^^^^^^^^^^^^^

*30-Sep-2025*

**New Features:**

- OpenPBR material support for UV Editor.
- Added support for PSD, EXR and HDR file format for UV editor.
- Added support for psdFileTex as a file node type.
- UVItem rotation will now rotate at the center of the UVItem.
- Groups of selected UVItems will now rotate around shared pivot point.
- New UV Draw Mode (normal/inverted) for the UV drawing tool.
- UV Scale now has Uniform mode. User can switch to it (disabled by default) by enabling it with right click and clicking or just hold SHIFT modifier in any Scale mode.

**Improvements:**

- Replaced separate transparency and alpha-only toggles with a unified three-state control (Off, On, Alpha).
- Maya 2026 C++ plug-in added (Advanced Visibility).
- Improved rotation circle rendering for UV editor.
- Improved selection mode logic.
- Selection mode will now select only one time if not in drag rect mode.
- Drag rect mode will only show if dragged for specific threshold.
- Randomize selection will select the last preview curves, not a new random pattern.

**Bug Fixes:**

- Reset pivot will now work properly even if there's a deformer present on the curve.
- UV Editor Alt+Scroll zoom fix.
- Layer Collection drop-down menu styling fixes.

Version 1.3.11
^^^^^^^^^^^^^^

*13-May-2025*

**Bug Fixes:**

- Fixed major bug that prevented the layers from being updated on some Maya versions.
- Other minor fixes.

Version 1.3.10
^^^^^^^^^^^^^^

*22-Apr-2025*

**New Features:**

- Maya 2026 support. Please report any issues.

**Improvements:**

- Bind will no longer automatically flip UVs (back to old behavior)
- Added automatic initialization that will be triggered when upgrading Maya versions.

**Bug Fixes:**

- Fixed Maya's popup dialogs in new Maya versions.
- Removed deprecated profile magnitude input field. It should not be used. To reset it without the field (old projects) run Options->Other Options->Reset Legacy Profile Magnitude Attribute.
- Numerous small bug fixes and improvements and major code refactor.

Version 1.3.9
^^^^^^^^^^^^^

*22-Jan-2025*

**Improvements:**

- PNG with alpha in the RGB channel is now supported for :ref:`color mode<color-mode>`.
- Improved tooltips parsing.

**Bug Fixes:**

- Fixed an error that prevented :ref:`color mode<color-mode>` from being enabled in some cases.
- Improved error handling in :ref:`color mode<color-mode>` toggle.
- Fixed an issue with unselectable curves when using :ref:`Apply Curve Colors or Sync Curve Color to Layer Color<color-mode>`.
- Fixed gray color overlay on some menus in :ref:`Curve Control Window<curve-control-window>`.

Version 1.3.8
^^^^^^^^^^^^^

*20-Jul-2024*

**Improvements:**

- UV editor will now display Alpha texture instead of Diffuse when only Alpha map is used in the material graph. Color input can now use color constant or other nodes if needed, instead of being restricted to "file" node only.
- Color mode is now compatible with materials without Diffuse texture map.
- Mirror function will now skip cards if they are not compatible or broken for some reason.

**Bug Fixes:**

- Profile Curve Graph will now be properly copied when using "Transfer Attribute" or "Copy-Paste Attribute" functions. No need to open the "Filter" window first.

**Technical:**

- Decoupled the plug-in from the "version/scripts" folder for easier use of modules in studio environment. The only "hardcoded" path now is the "log.log" file path. It will be created in the same folder as before "version/scripts/gs_curvetools/log.log" for each user.

Version 1.3.7
^^^^^^^^^^^^^

*24-Jun-2024*

**Improvements:**

- Drastically improved the performance of graphs (Twist, Width) on large complex scenes.

**Bug Fixes:**

- Maya 2022 only: Fixed the visual bug that caused the curve to become visibly smaller when using warp cards/tubes and bind. The bugfix is a workaround, as it is an internal Maya issue with some built-in functions. Due to the workaround, the user will see the intermediate updates of the viewport during the function execution.


Version 1.3.6
^^^^^^^^^^^^^

*05-Apr-2024*

**New Features:**

- Maya 2025 support (please report bugs)

**Bug Fixes:**

- Minor bug fixes and code refactoring

Version 1.3.5
^^^^^^^^^^^^^

*05-Mar-2024*

**Improvements:**

- Automatically reveal the layer if it is hidden and the new object is being created into it.
- Old versions (v1.2 and up) are now available as a download for Personal Licenses.

**Bug Fixes:**

- :ref:`Unpack<unpack>` will no longer be affected by the selected object type in :ref:`Geo to Curve<card-to-curve>` window.
- :ref:`Export<import-export-page>` will no longer be locked by the :ref:`Advanced Visibility<advanced-visibility>` node present in the scene.

Version 1.3.4
^^^^^^^^^^^^^

*11-Dec-2023*

**Improvements:**

- Added tooltips to Scale Factor and Precision window and all the controls.
- Normalize to Default will now reset the sliders even if no curves were selected in the viewport.

**Bug Fixes:**

- No more errors when trying to Extract All in an empty scene with no curves.
- Fixed Layer color picker in the Curve Control Window. It will now change layer color properly.
- Fixed tooltips for all the color pickers in the UI (UV Editor and Curve Control Window).

Version 1.3.3
^^^^^^^^^^^^^

*28-Nov-2023*

**Improvements:**

- Much less geometry deformation and distortion for new Warp Cards, Tubes and Bind objects when scaling them down to very small scales (like for brows, eyelashes etc.). Improved geometry precision and stability overall.
- An option to change the new :ref:`Precision Scale<precision-scale>` value in the :ref:`Scale Factor and Precision<scale-factor-and-precision>` window.
- An option to normalize the :ref:`Scale Factor<scale-factor>` and :ref:`Precision Scale<precision-scale>` of the selected Warp Cards, Tubes or Bind objects to the chosen slider values or to default recommended values (Scale Factor = 0.5, Precision Scale = 0.05). Buttons are found in the Scale Factor and Precision window. Also works on Cards, Tubes and Bind objects from older updates.
- :ref:`Add Card, Add Tube and Fill<add-cards-button>` functions will now use the new Precision Scale and normalize the selected Warp Cards, Tubes or Bind objects before performing the operation. This ensures that no matter the initial scale or scale factor of the selected curves, the function will result in a consistent widths and profiles for the new objects. Works on objects from older updates as well.
- :ref:`Rebuild<rebuild-curve-slider>` slider will now work properly on small scale curves.
- New objects should now be able to create more sharp corners when three or more CVs are bunched together.

**Deprecation:**

- Smooth slider was removed from the "Other" tab in the :ref:`Curve Control Window<curve-control-window>` (don't confuse with the :ref:`Smooth<smooth>` function from the main window, it's still there). It was removed because it interfered with the new precision options. There is an option in the Options⇨Other menu to reset the smooth value to 0 if needed for older projects.

**Bug Fixes:**

- :ref:`Mirror<mirroring>` will now work properly on Tube objects
- Opening Log file will no longer block Maya until the log is closed.

Version 1.3.2 Hotfix 2
^^^^^^^^^^^^^^^^^^^^^^

*29-Oct-2023*

**Bug Fixes:**

- Using Curve Card and Curve Tube on duplicated and unparented curves will not throw an error anymore.
- Other minor related fixes.


Version 1.3.2 Hotfix 1
^^^^^^^^^^^^^^^^^^^^^^

*28-Oct-2023*

**Improvements:**

- Ambient Color plug is now also supported by the UV editor for Lambert, Blinn, Phong and PhongE materials. It will now display the texture correctly in the UV editor if this plug is used, instead of the Color plug.

Version 1.3.2
^^^^^^^^^^^^^

*27-Oct-2023*

**Important note:**

- This update has a lot of internal code changes so it is **critical** to completely re-install GS CurveTools. :ref:`Installation<installation-steps>` and :ref:`Update Instructions<update-instructions>`. Everything is backwards-compatible but just in case it is recommended to finish the old projects before updating.

**New Features:**

- New **Unpack** function. :ref:`Unpack<unpack>` function allows to recreate the original objects (cards or tubes) from the :ref:`Bound<bind-unbind>` object and place them in the exact same position as they are currently placed with all the deformations and world position. Accessed by selecting the :ref:`Bound<bind-unbind>` object and Shift+Clicking on :ref:`Unbind<unbind>` button.
- New :ref:`Auto-Sampling<auto-sampling>` toggle attribute that will automatically increase sampling rate for Warp based objects on low CV counts. This allows for optimal performance on high CV counts and good accuracy on low CV counts.
- New :ref:`Duplicate and Unparent Curves<duplicate-and-unparent-curves>` utility function (in the Options ⇨ Utility) that will duplicate curves and unparent them (parent them to the world). This is useful when you need to export only curves without construction history, or if you need the curves for something else in the scene.

**Improvements:**

- :ref:`Geo to Curve<edge-to-curve-card-to-curve>` (previously Card to Curve) now supports tube shapes for the original geometry as well as Auto Mode. Auto Mode will automatically determine if the target geometry is a curve or a tube and create the procedural objects accordingly.
- :ref:`Geo to Curve<edge-to-curve-card-to-curve>` can now automatically delete the original objects after the conversion (optional).
- :ref:`Geo to Curve<edge-to-curve-card-to-curve>` can now use Aim Mesh to determine the correct position of the root CV after the conversion.
- :ref:`Geo to Curve<edge-to-curve-card-to-curve>` algorithm was greatly improved. UVs adjustment and placement is much more precise now. Width calculation is now more accurate.
- :ref:`UV Editor<uv-editor>` now supports Maya 2024 Standard Surface material.
- :ref:`UV Editor<uv-editor>` internal texture search was improved. Shader graphs can now have nodes between the texture file and material nodes (for example color correction nodes etc.)
- :ref:`Fill<fill-button>` can now create curves without the geometry as an option. The option is toggled in the :ref:`Options<options>` menu.
- :ref:`Rebuild Curve<rebuild-curve-slider>` slider now has limited support for curves with construction history. The slider will rebuild them, but the preview will not be shown for those curves.
- A lot of internal code changes to improve future features.

**Bug Fixes:**

- Fixed a bug with :ref:`Curve Tubes<attributes>` (warp) not scaling properly with high WidthX or WidthZ values.
- Fixed a bug with :ref:`Auto-Hide Curves on Inactive Collections<auto-hide-curves-collections>` checkbox. It will now work properly with :ref:`Layer<layers>` filters.
- GS CurveTools will now automatically load built-in Maya plug-ins that it needs. If user disabled those plug-ins in the past it should not cause errors now. For now it's "curveWarp" and "lookdevKit" plug-ins that are required.

Version 1.3.1
^^^^^^^^^^^^^

*19-May-2023*

**Improvements:**

- Changed node id in plug-ins for a proper one from Autodesk. Should avoid conflicts with other plug-ins in the future.
- Better error handling and error message for corrupted layer names (copy-pasted curves or improperly imported curves).

**Bug Fixes:**

- Fixed a critical bug with Attribute and UV transfer (and Copy-Paste) filters. They will now work properly when deselecting some attributes in filter window and transferring attributes to different type of card/tube.

Version 1.3 Hotfix 1
^^^^^^^^^^^^^^^^^^^^

*05-Apr-2023*

**Bug Fixes:**

- Fixed an error in Maya 2018-2020 when clicking on layer Filters.

Version 1.3
^^^^^^^^^^^

*04-Apr-2023*

Major update!

**New Features:**

- **New Layer Collections System**. Layer collections allow users to better organize their projects, import curves to a new collection to avoid layer merging, transfer curves between collections and more useful utility features:

  - Create and Delete collections.
  - Merge, copy, paste, rename and reorder layer collections.
  - Clear all the curves from the collection.
  - Auto-Hide curves from inactive layer collections.
  - Using Ctrl hotkey with layer filters (All, Curve, Geo) will affect all layers in all collections.

- Fully reworked **Color Mode**:

  - User can now work in color mode at all times if he chooses. Duplicate, Fill and other features will not disable the color mode.
  - Activating color mode will now colorize only the diffuse map and will keep the alpha transparency.
  - Alpha transparency can be optionally disabled.
  - Checker pattern is available for both modes.
  - All the previous features are still available like curve color sync, color randomization and custom colors for each layer.
  - UV editor will properly work with color mode enabled.

- **New Advanced Visibility** mode in Curve Control Window:
  
  - Geometry Highlight option will highlight the geometry component automatically for better card visibility.
  - Curve Highlight will enable selected curves and CVs to be drawn Always-On-Top with various customizations available.
  - CVs - size, selected/deselected colors and transparency with soft select support.
  - Curve - enabled/disable highlight, curve width, curve color and transparency.
  - Hull - enable/disable hull drawing (lines between CVs) with width, curve color and transparency customization and soft selection support.
  - Other advanced options like Distance Colors and Occlusion.

- **New Dynamic Length Divisions** toggle. With this option enabled, curves will now auto-calculate the appropriate number of divisions based on the length of the curve. L-Div slider will act as a "Density" slider when this option is enabled. The higher the L-Div value, the denser the auto-calculated divisions will be. Old cards will be auto-converted to use this mode. New cards are automatically created with this option (disabled by default).
- **New Card to Curve** algorithm. Card to curve now has the ability to automatically create cards and match their parameters to the original one-sided geometry card. Card to Curve button will now open a separate window with various options available:

  - Output Type will control the desired output of the operation - Cards or Curves Only.
  - Card Type will determine the final card variant - Warp or Extrude.
  - Match Attributes selector will toggle the attributes matching for newly created cards (Orientation, Width, etc.)
  - UV Match Options have optional post-process commands as Vertical and Horizontal Flip.
  - Reverse curve will reverse the final curve direction (enabled by default for better result).
  - NOTE: matching parameters is not a perfect process and resulting procedural cards might have slightly different shape.
  
- **Copy and Paste Attributes and UVs**. Attributes and UVs can now be copied and pasted from card to card (or many cards) as an alternative to the old Transfer Attr. and UV commands. Copy-Paste functions can be accessed by holding RMB on Transfer Attr. or Transfer UVs. button.
- **Transfer (and copy-paste) attribute filter**. User can now choose which attributes to transfer when using Transfer Attr. or Copy-Paste commands. Attribute filters can be accessed through the Transfer Attr. (or Transfer UVs) button marking menu by holding RMB on those buttons. Option rectangle ▢ near the Copy-Paste buttons will open the filter menu. Highlighted attributes will be transferred and unchecked will be ignored. Orientation attribute is unchecked by default.
- **New Randomize Selection** slider inside Randomize window. Will randomize current selection based on the slider value.
- **Select Original Curves** command will select the original curves that were used to create bound object. This allows for easy modification of the basic parameters, such as Orientation, Twist etc.
- **Auto-Refine**. Refine slider was reworked and now has Auto mode enabled by default. This allows for much better overall viewport performance of the cards but may result in a less precise geometry fit to the curve. Can always be disabled to have the original control over the Refine parameter.
- **UV Editor Sync Selection**. This button will change the viewport selection based on the selected UV rectangle inside the UV Editor.
- **UV Editor Randomize** function. This button will randomize the positions of the selected UV rectangles based on their original position. The UV rectangles will jump between these original positions in a random order but will keep the original density distribution (meaning if you had 3 cards in one position and 6 in the other, they will still have this 3-6 distribution). Alternative mode (holding SHIFT during click) will ignore the density distribution and randomize.
- **UV Editor Additional Options**:
  
  - Alpha only mode - show only alpha map in the UV editor for better contrast and editing experience.
  - UV rectangle color customization: selected, fill and border.
  
- **Rebuild Curve** slider now has Rebuild with current value button [R] and reset slider range button.
- **Custom Delete Curve Hotkey** was added to the hotkeys list. This delete command should be able to safely delete selected curves without the need to switch to the group selection first.

**Improvements:**

- **Even more layers** available. Number of active layers can now be up to 80. User can optionally change layer number to be 20, 30, 40, 60 and 80!
- **Layer customization windows** was updated to make use of additional layers.
- New projects will now use the updated layer system that will not clutter the Display Layer window in the Channel Box. All the layers are still there and accessible through the Window⇨Relationship Editors⇨Display Layers. User can manually update old layer system to the new one using Options⇨Other Options⇨Convert to New Layer System.
- **Layer Hotkeys** (key combinations) were slightly **changed**:

  - Show Always On Top is now SHIFT+CTRL+ALT+Click
  - Toggle Geometry Visibility is now CTRL+ALT+Click

- **Import and Export** curves will now use its own file extension ".curves" to easily distinguish them from regular maya ".ma" files. User can still save and import ".ma" files as an option.
- **Extract Selected and Extract All** buttons have new key modifier available - Ctrl. Holding Ctrl will automatically open Export window after the extraction process is finished and after exporting the geometry the extracted geo will be deleted from the scene. Holding Ctrl will also disable layer hide feature during Extract All process.
- **Bind, Unbind and Mirror** will now flip the UVs before performing the operation to achieve better results. This is optional and can be disable in the options.
- **Options Menu** was reordered and compressed to have better visibility and organization.
- **UVs** will now be **properly transferred** form and to Bound geometry.
- User can now open the **log file** using Help⇨Open Log File (Windows only) in case of any errors.

**Bug Fixes:**

- Unbind command was fixed for Maya 2021+. Unbind was failing on bound objects with warp curves in the scene that was saved and reloaded.
- A bug that caused objects to be duplicated twice when clicking the "Duplicate" button has been fixed. Duplicate button should now be more consistent.
- Fixed Axis Flip and Axis Direction parameters update in Curve Control Window.


Version 1.2.10
^^^^^^^^^^^^^^

*07-Jul-2022*

**Improvements:**

- Fill function will now automatically reset pivot to the root CV on newly created curves.

**Bug Fixes:**

- Fixed an encoding issue with tooltips.md file that caused an error on some Korean PCs during the startup of the plug-in (Maya 2022 confirmed, possibly 2023).
- Fixed an issue with Twist and Width graphs not being able to be reset using Reset Curve button.
- Fixed an issue with Twist and Width graphs not copying the values correctly if multiple curves were selected in component mode.

Version 1.2.9
^^^^^^^^^^^^^

*04-Jul-2022*

**Bug Fixes:**

- Fixed a bug with UV Editor not showing textures in older (Python 2) Maya versions.

Version 1.2.8
^^^^^^^^^^^^^

*27-Jun-2022*

**New Features:**

- All the relevant buttons now have (optional) tooltips. Can be disabled in the Options.

**Improvements:**

- **Convert Curves** is now out of beta (in the Options menu):

  - Card ⇨ Card conversion will now correctly keep original orientation and profile.
  - Will now retain original materials on conversion.
  - Performance was improved.

- **Twist, Width and Profile Graphs** are now applied to ALL selected curves.

- **Card to Curve** algorithm was rewritten and improved:

  - Better compatibility and reliability for one-sided cards with different vert orders.
  - Optimization and speed-up of the algorithm
  - Cards with no width spans are now correctly converted.

- Massive improvement of the **Mirror** operation:

  - Improved orientation and profile calculation during mirror for all Warp and Extrude cards.
  - Speed-up and optimization.
  - Much less orientation "drift" when using "Flip".

- **Orient to Normals** algorithm improvements:

  - Optimization and speed-up.
  - Increased precision with less iterations.
  - Cards will not flip or change orientation on continuous use on already aligned cards.
  - Reduced angle tolerance to 1 degree by default.

- **Select CVs** slider was improved. Current hotkeys:

  - **Shift + Drag**: additive selection.
  - **Alt + Drag**: deselect CVs.
  - **Ctrl + Drag**: allows for slider movement without selection change.

- **Expanded supported texture formats** list for the **UV editor**. Added TIFF (TIF). 

  - Full list of supported texture formats: JPG, JPEG, PNG, **TIF, TIFF,** TGA (24bit, no RLE).
  - Also added additional info for the "Wrong format" error message. It will now specify that TGA has no support for RLE compression.

- Minor improvements for curve creation algorithm (better refinement and divisions calculation)

- Some minor UI adjustments

**Bug Fixes:**

- Fixed a **hotkey conflict** with layer selection:

  - Holding **Ctrl + clicking** on Layer should now select the contents of that layer, and deselect everything else like intended.
  - **Show Always on Top** hotkey changed to **Ctrl+Alt**.

- Fixed a bug where **"Layer Isolation Selection" hotkey** was not working properly. Now holding Shift+Alt and clicking on Layer will isolate select this layer properly.

- **Transfer UVs** will now correctly transfer H-Flip UV attribute.

- **Select CVs** slider will no longer deselect the last selected CV when using subtractive mode.

Version 1.2.7
^^^^^^^^^^^^^

*20-Mar-2022*

**New Features:**

- **Maya 2023 Support**
- Global and Per-Layer **Always-On-Top** toggle for curves ("Per-Layer" is only for Maya 2022+)
- **(BETA) Convert** one type of Card/Tube to the other type (Warp⇨Extrude, and vice versa).

  - Might have issues with orientation when converting
  - Might have other issues with old Cards/Tubes
  - Recommended to use only on newly created cards/tubes (v1.2.7+) and NOT on the old ones.

**Improvements:**

- **Scale Factor** is now stored in the scene as well as in every created curve. This will allow for better compatibility with other functions and more reliable workflows in the future.


**Bug Fixes:**

- UV Bug that was in 2020 and 2022 was fixed in 2023 by Autodesk. 2020 and 2022 still have it, obviously.

**Deprecation:**

- Maya 2017 support is dropped. Might work just fine with this update, but there will be no bug fixes for 2017.

Version 1.2.6
^^^^^^^^^^^^^

*21-Feb-2022*

**Improvements:**

- More precise generation of **Control Curve** deformer. Generated control curve should now better match the curvature of the selected curves.

**Bugfixes:**

- **Control Curve** deformer will now be properly generated even if the selected curves had the root CVs deleted at some point.
- **Mirror and Flip** functions will never invert the Width graph after the fix. Before the fix it was the case for some users.

Version 1.2.5
^^^^^^^^^^^^^

*24-Jan-2022*

**New Features:**

- **Layer Names** - new parameter for every layer. Regroup by Layer will now use the custom names when naming the layers. Custom names can be edited in the Layers Customization window and stored as a global preset, just like the layer colors.
- **Layer Names & Colors** - new button on the main UI. Opens the name and color editor for layers.
- **Full Non-Square Texture Map Support** - GS CurveTools UV editor will now properly stretch and scale non-square texture maps (diffuse and alpha map), just like the native Maya UV editor does. Coverage and Translate Frame can be used to further edit the position and scale of the texture map if Use Transforms toggle is enabled.
- **UV Editor Texture Controls** - new section in the UV editor:

  - **Transform** - this toggle will enable/disable texture map transformations based on the place2dTexture node parameters: Coverage and Translate Frame. Offset parameter is NOT supported. Both diffuse and alpha map should have the same Coverage and Translate Frame parameter for this to work.
  - **Alpha** - this toggle will enable/disable the use of Alpha map that is connected to the Transparency plug of the material (from separate files or the same file).

- **UV Editor Colors** - new section in the UV editor with 3 editable color swatches for background, grid and frame colors of the UV editor viewport.

**Improvements:**

- **Regroup by Layer** - will no longer use Group Name field as a default name. Group Name field is only used by the Group Curves button to set the name of the new group. Regroup by Layer will use the default name (CT_Layer#) or the name from the Layers Customization window.
- **Changed the Default Grey Color** for layers to default (0, 0, 0) color. Reset layer will rest to this color as well.
- **Some Tooltips** added to the UV editor.
- **UV Editor Cache** - added Texture Map Caching to speed up the UV Editor. Texture map is loaded only once, and if there are no changes to the file it will be loaded from the cache every subsequent time this texture map is needed. Changes to the Diffuse or Alpha map will cause a reload from the disc. Before it was only reloaded if the path changed.

**Bugfixes:**

- **Add Selection to Layer** will now properly sync curve colors if Sync Color Layer to Layer Color is selected in the options.
- **Zoom and Focus Events** should now properly re-render the texture map in the UV editor to match the screen resolution. Should eliminate shimmer effect on square texture maps completely.
- **Fixed Some Lags** during zooming in the UV editor.

Version 1.2.4
^^^^^^^^^^^^^

*09-Aug-2021*

**New Features:**

- **Orient to Normals** function is now available in the Curve Control Window. Orients selected cards to the target mesh. Change number of iterations or angle tolerance to get the result you want. Target mesh is selected and remembered throughout the session. Orient function has dedicated hotkey available.
- **Mass Bind** option is now available in the options menu ("Bind to All Available Empty Curves") Enabling this option will bind selected geo or hair clump to all selected "empty" curves. Previous attributes are retained on the target curves (if they had them from the start).

**Improvements:**

- **Mirror** function was improved. Single cards are now oriented properly during mirror process. Bound cards (clumps) orientation accuracy depends on the complexity of the clump (the more variation, the less accuracy).
- **Fix Broken Graphs** option is now available in the options menu. Using this fix will attempt to fix all the broken graphs in the scene. Until Autodesk fixes this issue, this is a viable workaround.
- **Reset Button** on graphs is now improved to cover the edge case of "broken graphs" issue in Maya.
- **Mirror** function will now automatically reset curve pivot point (for mirrored cards).

**Bugfixes:**

- **Shift + Hotkey** combination is now available. Making a hotkey using only Shift+Hotkey combination will now work properly with functions that accept Shift modifier (small triangle on the button)
- **Profile Curve** will now work properly when using Add/Fill functions between cards with different number of nodes on said graphs.
- **Mac Icons** will now load properly on some OSX configurations.
- Numerous other small code adjustments and improvements.


Version 1.2.3
^^^^^^^^^^^^^

*20-May-2021*

**Bugfixes:**

- Maya 2020.4 Unbind fixed. New cards will have the fix built-in. Old cards must be fixed using Fix Maya 2020.4 Unbind Function from the Options Menu.
- Rare Progress Bar bug was fixed in all versions of Maya.
- Fill function will no longer throw an error if user selected incompatible curves. Those curves will be ignored.
- Progress bar on Fill function was fixed.

Version 1.2.2
^^^^^^^^^^^^^

*04-May-2021*

Just a small hotfix for Maya 2020.4 users

**Ignore this update if you had no issues with the plug-in.**

**Bugfixes:**

- New Warp Curves created in Maya 2020.4 will now behave like intended.
- Maya 2020.4 Twist and Inverted Twist attribute fix added. To use the fix, run the command in Options ⇨ Fix Maya 2020.4 Twist Attribute

Version 1.2.1
^^^^^^^^^^^^^

*04-May-2021*

Just a small hotfix for Maya 2017 users

**Ignore this update if you had no issues with the plug-in.**

**Bugfixes:**

- Maya 2017 and older 2018 updates (<2018.6) errors fixed

Version 1.2
^^^^^^^^^^^

*28-Apr-2021*

Major Update!

**New Features:**

- Fully **Reworked Main UI**.
- Fully **Reworked Curve Control Window**
- Full support of **Python 3** and **Maya 2022** (also supports python 2 compatibility mode for 2022)
- **Bind** and **Unbind** functions (former Warp function). You can now unbind already bound cards, change them, add new cards and bind back to the original curve.
- **Curve attributes retention**. Curves will now remember their attributes even if you unbind them. Binding back will restore the previous attributes. Can be disabled in options.
- New **Fill** function. This function works similar to Add Cards/Tubes, but also supports custom bound cards/geometr. All card types are now supported, including Bound cards.
- New **Subdivide** function. This function will subdivide any selected Card/Tube and replace it with copies of itself based on the Add slider. Increase the density of your cards with ease!
- New **Card to Curve** function. This function will try to replace any selected cards (one sided geometry) with curves based on their topology. Only one sided cards are supported at this moment. Tubes and other complex shapes will not work.
- New **Regroup by Layer** function with color mode and custom naming support. Organize your scene in one click!
- New **Mirror** function. Mirror or Flip your cards.
- New **Inverted Twist** attribute. Twist the root of the curve (Fully compatible with normal Twist and Twist Graph)
- New **Profile Graph**. Change the profile of the card along the length of the curve!
- New **H-Flip UV Attribute**. Horizontally flip UV on any card!
- New **UV Editor Window**. Interface for all your UV editing needs. No more sliders!:

	- Change UVs on any number of selected cards
	- Full support of Bound (old Warp) curves. Change UVs without unbinding.
	- Select, Move, Rotate, Scale multiple UVs
	- Draw UV rectangle to quickly change UVs
	- Horizontal or Vertical Flip of UV card
	- Selected UVs List.
	- Reset UV, Focus View, Isolate Select and Show All functions
	- Supports TGA, PNG and JPG(JPEG) texture maps. Other formats may be supported with minor updates.

- New **Import and Export Curves** function in the Options menu. You can now safely export and import your curves to be stored as presets!

- New **Alt Mode for Layers**. Hold Alt + Click to quickly show/hide layers.
- User can now switch between **20, 30 and 40 Layers** mode. Twice as many layers to work with.
- Layers can now be used in **Numeric Only Mode**. A-J letters can be dynamically switched to 10-19 layer numbers.
- New **Custom Colors Window**. **Colorize** your Layers, **Save** as global **Preset**, **Load** on any project, **Apply Colors to Layers**, Gradient and Randomize functions.
- New **Color Functions**. You can now Sync your Layer Color to the Curve Color and sync your Layer Color to the Outliner (Regroup by Layer function will apply colors)
- New dedicated **Color Picker for Curve Color**.

**Improvements:**

- Renamed Warp Function to Bind.
- Bind (old Warp) now has an option to Duplicate before Bind. This will leave the original cards behind and create a duplicate for Binding.
- Bind will now duplicate original cards if Shift button is pressed with the Bind button.
- Redundant UV attributes were removed (still available for old projects). Rotate Tip and Rotate Root attributes were deprecated.
- Numerous rewrites and code improvements.
- Warp Mode is now the default mode for curve creation.

Version 1.1.5
^^^^^^^^^^^^^

*02-Sep-2020*

Small transition update before v1.2

**Improvements:**

- High-DPI interface improvements.
- Fixed text alignment in some menus.
- General code optimization and maintenance.

**Bug Fixes:**

- Extracting geometry from selected curves will no longer throw an error and stop if one or more curves are broken. Now it will just skip those curves and print their names in the console.

Version 1.1.4
^^^^^^^^^^^^^

*30-Jul-2020*

**Improvements:**

- Scale Factor Slider now properly stretches with the window.
- Removed minimize and maximize buttons from Scale Factor, Global Curve Thickness and Randomize windows.
- Changed the name of the Randomize window from "Randomize" to "Randomize Curves".

**Bug Fixes:**

- Fixed a Randomize window bug where it failed to properly construct the window if the main plug-in window was docked. It should now properly create a floating window regardless of the main window position or docking.
- Fixed a bug with Control Curve Apply button where it deleted wrong curves after applying the deformer. This only happened with the Curve Cards/Tubes that were created using Curve Card/Tube or Warp buttons out of duplicated Control Curve curves.
- Extend Curve button will no longer create multiple CVs on the section of the curve that was extended. Curve will be automatically rebuilt every time based on the original number of CVs.
- Minor code cleanup and maintenance.

Version 1.1.3
^^^^^^^^^^^^^

*09-May-2020*

**New Features:**

- Global curve thickness can now be changed and saved in the "Options ⇨ Global Curve Thickness" menu. Update already existing curves using "Update Curves" button and save selected thickness using "Save" button. Line thickness for the new curves is now set automatically. You can still edit individual curve thickness in Curve Control Window.

- Two new options in the Options menu: "Set AO Settings" and "Set Transparency settings". They will change the viewport settings for the current scene for better curve visibility and transparency. You can then toggle AO by setting a hotkey in the hotkey editor “GS ⇨ GS_CurveTools ⇨ Misc ⇨ GSCT_ToggleAO”.

**Improvements:**

- Improved "Duplicate" command. Curve thickness will now be consistent in duplicated curves.

- Group Curves command will no longer append a number to the end of the name of the group. Maya should handle this automatically.

**Bug Fixes:**

- Fixed an error that appeared on commands Reset Pivot, Rebuild Curve and Select Curve when there were matching names in the scene.

- Minor code cleanup and optimization.

Version 1.1.2
^^^^^^^^^^^^^

*13-Apr-2020*

**New Features:**

- Added "Edit Orig. Geo" button. You can now edit custom geometry attached to a curve (Enable "geometry edit" in the layer to be able to select geometry)
- "Reverse Normals" attribute is now available for every type of curve created in CurveTools plug-in (affects only curves created in v1.1.2 and higher)

**Improvements:**

- More predictable behavior of "Flip Axis" button. It will now automatically reverse normals (affects only curves created in v1.1.2 and higher)

**Bug Fixes:**

- Attaching custom geometry to a curve will no longer cause "offset" if target curve has transforms or offset pivot.
- Fixed an error and "stuck" progress bar when pressing Duplicate button with no curves selected.
- Reduce curve will no longer cause an error when pressed with no curves selected.
- Minor code cleanup.

Version 1.1.1
^^^^^^^^^^^^^

*30-Mar-2020*

**New Features:**

- Added special Hotkey **"GS ⇨ GS_CurveTools ⇨ Misc ⇨ GSCT_ToggleAO"** to toggle **AO** (refer to Online Documentation ⇨ Useful Tips)
- Added Hotkey to switch geometry editing for all layers **"GS ⇨ GS_CurveTools ⇨ Misc ⇨ GSCT Toggle Geo Edit"**

**Improvements:**

- **Rebuild Curve Slider** will no longer throw warning messages when used with no curves selected
- **Twist Magnitude** field upper limit increased to 99

**Bug Fixes:**

- **Fixed Hotkeys**. They will now save properly between Maya sessions
- **Open Online Documentation** will now properly work on Mac
- Fixed some icons on Mac
- Minor code cleanup

Version 1.1
^^^^^^^^^^^

*10-Mar-2020*

**New Features:**

- New **Curve Warp** dedicated workflow:

	- Change **twist** and **scale** at any point of the curve using provided graphs in **Curve Control Window**.
	- Unlock **length** of the curve. You can now stretch geometry along the curve using **length slider**.
	- **Offset** geometry along the curve by using **Offset slider**.
	- All the previous attributes are still there.

- New **Warp** function:

	- **Warp** function allows to bind any geometry to a curve or even bind already existing curves to any curve.
	- Original geometry and curves keep their relative position and shape. You can make braid from normal curves, bind them to one curve and braid will look just like you made it.
	- You can also edit original curves later if you want by clicking "Edit Orig. Curves" button in Curve Control Window.
	- **Warp** function can be nested as many times as you want.
	- **Layers**, **Duplication** and other functions are fully supported for nested **Warp Groups**.

- New **Layer Filters**. Quickly show/hide all the layers. Show only geometry or only curves on all layers.

	- Last layer (**J**) is skipped by default. You can store your template curves there and the filters will not affect it. This functionality can be changed in the options.

- New **Color Mode**. Quickly colorize your layers in viewport and in layer window. Switch between two modes: only color or UV checker pattern + color. Click again to return back to normal textures.

- New **Extract Selected** and **Extract All**:

	- You can now extract geometry from all layers with one click. By default it will also combine geometry into one mesh ready for export. Shift + Click will skip combining the mesh and you will get all the curves separately, organized in groups based on original layers.
	- Last layer (**J**) is skipped by default. You can store your template curves there. This functionality can be changed in the options.
	- **Extract Selected** will extract only selected Curve Cards and merge them by default. Shift + Click to skip merging step.

**Improvements:**

- **Transfer Attr.** and **Transfer UVs** buttons can now work in reverse mode (Shift + Click). Default ⇨ Transfer From **First** selected to all other curves, Shift ⇨ Transfer from **Last** selected to all other curves.

- **Transfer Attr.** and **Transfer UVs** will now show [Source] curve when transferring the attributes.
 
- **Smooth** function can now not only smooth the entire curve but also smooth only selected CVs. 

- **Rebuild Curve** will now show number of CVs in the viewport.

- **Reset Pivot** can now place pivot point at the tip of the curve by using Shift modifier.

- **Delete Group and Curves** button was removed from Layers.

- Much **better overall stability** of the plug-in. Selection is intelligently filtered to avoid errors. More information is provided for the user.

- **Edge to Curve** function optimization. It is now up to 200% faster on large number of edge groups.

- Any **instanced curve** will now be automatically converted to normal curve when using Curve Card/Tube buttons. This behavior can be altered in the options menu.

- **Documentation** was removed from the folder and is now hosted online. Help menu now has option to open online documentation.

	- Online Documentation: https://gs-curvetools.readthedocs.io/

- **Merged Versions** - we are back to one folder for every version of Maya.

- **Mac OS** support is now in Beta. If you have any bugs, please report them.

**Bug Fixes:**

- Switching workspaces and closing Maya will not cause blank window to appear when Maya is launched next time.

- Changing scenes will not affect functionality of the plug-in.

- Add Cards command will no longer randomly add additional curves at the location of existing curves.

- Reset Pivot will not throw an error when there is a non-curve object in the selection.

- Plug-in no longer resets its options when switching scenes.

- No more random "Stack Trace" errors on Maya startup.

**Known Issues:**

- Rebuild Curve slider is not working if there is Maya Deformer currently present on the curve. Applying the deformer (deleting history) fixes it.

- Smooth function can't handle more than 255 CVs on one curve

Version 1.0.15
^^^^^^^^^^^^^^

*05-Jan-2020*

**Improvements:**

- Added full Maya 2020 Support

**Bug Fixes:**

- Fixed some minor bugs for all Maya versions
- Fixed Curve Control Window error for Maya 2017 and 2018

Version 1.0.1
^^^^^^^^^^^^^

*05-Dec-2019*

**Bug Fixes:**

- Fixed a bug where accidental duplication (Ctrl+D) of path curve led to unexpected behavior of layers
- Other minor improvements

Version 1.0.05
^^^^^^^^^^^^^^

*06-Nov-2019*

**Improvements:**

- Supported Maya versions now have separate plugins for better compatibility. Report bugs with Maya version attached.

**Bug Fixes:**

- Fixed huge Shelf icons some users of Maya 2018 and 2017 have experienced
- Fixed a few bugs in Maya 2017 version

Version 1.0
^^^^^^^^^^^

*08-Oct-2019*

- Initial Release
