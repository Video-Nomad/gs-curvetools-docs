.. currentmodule:: <index>

#########
Changelog
#########

Version 1.2.7
^^^^^^^^^^^^^

**New Features:**

- **Maya 2023 Support**
- Global and Per-Layer **Always-On-Top** toggle for curves ("Per-Layer" is only for Maya 2022+)
- **(BETA) Convert** one type of Card/Tube to the other type (Warp->Extrude, and vice versa).

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

**Improvements:**

- More precise generation of **Control Curve** deformer. Generated control curve should now better match the curvature of the selected curves.

**Bugfixes:**

- **Control Curve** deformer will now be properly generated even if the selected curves had the root CVs deleted at some point.
- **Mirror and Flip** functions will never invert the Width graph after the fix. Before the fix it was the case for some users.

Version 1.2.5
^^^^^^^^^^^^^

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

**Bugfixes:**

- Maya 2020.4 Unbind fixed. New cards will have the fix built-in. Old cards must be fixed using Fix Maya 2020.4 Unbind Function from the Options Menu.
- Rare Progress Bar bug was fixed in all versions of Maya.
- Fill function will no longer throw an error if user selected incompatible curves. Those curves will be ignored.
- Progress bar on Fill function was fixed.

Version 1.2.2
^^^^^^^^^^^^^

Just a small hotfix for Maya 2020.4 users

**Ignore this update if you had no issues with the plug-in.**

**Bugfixes:**

- New Warp Curves created in Maya 2020.4 will now behave like intended.
- Maya 2020.4 Twist and Inverted Twist attribute fix added. To use the fix, run the command in Options -> Fix Maya 2020.4 Twist Attribute

Version 1.2.1
^^^^^^^^^^^^^

Just a small hotfix for Maya 2017 users

**Ignore this update if you had no issues with the plug-in.**

**Bugfixes:**

- Maya 2017 and older 2018 updates (<2018.6) errors fixed

Version 1.2
^^^^^^^^^^^

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

Small transition update before v1.2

**Improvements:**

- High-DPI interface improvements.
- Fixed text alignment in some menus.
- General code optimization and maintenance.

**Fixed Bugs:**

- Extracting geometry from selected curves will no longer throw an error and stop if one or more curves are broken. Now it will just skip those curves and print their names in the console.

Version 1.1.4
^^^^^^^^^^^^^

**Improvements:**

- Scale Factor Slider now properly stretches with the window.
- Removed minimize and maximize buttons from Scale Factor, Global Curve Thickness and Randomize windows.
- Changed the name of the Randomize window from "Randomize" to "Randomize Curves".

**Fixed Bugs:**

- Fixed a Randomize window bug where it failed to properly construct the window if the main plug-in window was docked. It should now properly create a floating window regardless of the main window position or docking.
- Fixed a bug with Control Curve Apply button where it deleted wrong curves after applying the deformer. This only happened with the Curve Cards/Tubes that were created using Curve Card/Tube or Warp buttons out of duplicated Control Curve curves.
- Extend Curve button will no longer create multiple CVs on the section of the curve that was extended. Curve will be automatically rebuilt every time based on the original number of CVs.
- Minor code cleanup and maintenance.

Version 1.1.3
^^^^^^^^^^^^^

**New Features:**

- Global curve thickness can now be changed and saved in the "Options -> Global Curve Thickness" menu. Update already existing curves using "Update Curves" button and save selected thickness using "Save" button. Line thickness for the new curves is now set automatically. You can still edit individual curve thickness in Curve Control Window.

- Two new options in the Options menu: "Set AO Settings" and "Set Transparency settings". They will change the viewport settings for the current scene for better curve visibility and transparency. You can then toggle AO by setting a hotkey in the hotkey editor “GS -> GS_CurveTools -> Misc -> GSCT_ToggleAO”.

**Improvements:**

- Improved "Duplicate" command. Curve thickness will now be consistent in duplicated curves.

- Group Curves command will no longer append a number to the end of the name of the group. Maya should handle this automatically.

**Fixed Bugs:**

- Fixed an error that appeared on commands Reset Pivot, Rebuild Curve and Select Curve when there were matching names in the scene.

- Minor code cleanup and optimization.

Version 1.1.2
^^^^^^^^^^^^^

**New Features:**

- Added "Edit Orig. Geo" button. You can now edit custom geometry attached to a curve (Enable "geometry edit" in the layer to be able to select geometry)
- "Reverse Normals" attribute is now available for every type of curve created in CurveTools plug-in (affects only curves created in v1.1.2 and higher)

**Improvements:**

- More predictable behavior of "Flip Axis" button. It will now automatically reverse normals (affects only curves created in v1.1.2 and higher)

**Fixed Bugs:**

- Attaching custom geometry to a curve will no longer cause "offset" if target curve has transforms or offset pivot.
- Fixed an error and "stuck" progress bar when pressing Duplicate button with no curves selected.
- Reduce curve will no longer cause an error when pressed with no curves selected.
- Minor code cleanup.

Version 1.1.1
^^^^^^^^^^^^^

**New Features:**

- Added special Hotkey **"GS -> GS_CurveTools -> Misc -> GSCT_ToggleAO"** to toggle **AO** (refer to Online Documentation -> Useful Tips)
- Added Hotkey to switch geometry editing for all layers **"GS -> GS_CurveTools -> Misc -> GSCT Toggle Geo Edit"**

**Improvements:**

- **Rebuild Curve Slider** will no longer throw warning messages when used with no curves selected
- **Twist Magnitude** field upper limit increased to 99

**Fixed Bugs:**

- **Fixed Hotkeys**. They will now save properly between Maya sessions
- **Open Online Documentation** will now properly work on Mac
- Fixed some icons on Mac
- Minor code cleanup

Version 1.1
^^^^^^^^^^^

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

- **Transfer Attr.** and **Transfer UVs** buttons can now work in reverse mode (Shift + Click). Default -> Transfer From **First** selected to all other curves, Shift -> Transfer from **Last** selected to all other curves.

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

**Fixed Bugs:**

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

**Improvements:**

- Added full Maya 2020 Support

**Fixed Bugs:**

- Fixed some minor bugs for all Maya versions
- Fixed Curve Control Window error for Maya 2017 and 2018

Version 1.0.1
^^^^^^^^^^^^^

**Fixed Bugs:**

- Fixed a bug where accidental duplication (Ctrl+D) of path curve led to unexpected behavior of layers
- Other minor improvements

Version 1.0.05
^^^^^^^^^^^^^^

**Improvements:**

- Supported Maya versions now have separate plugins for better compatibility. Report bugs with Maya version attached.

**Fixed Bugs:**

- Fixed huge Shelf icons some users of Maya 2018 and 2017 have experienced
- Fixed a few bugs in Maya 2017 version

Version 1.0
^^^^^^^^^^^

- Initial Release
