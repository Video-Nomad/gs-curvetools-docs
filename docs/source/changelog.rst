.. currentmodule:: <index>

#########
Changelog
#########

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

Version 1.1.0
^^^^^^^^^^^^^

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
^^^^^^^^^^^^^
**Improvements:**

- Added full Maya 2020 Support

**Fixed Bugs:**

- Fixed some minor bugs for all Maya versions
- Fixed Curve Control Window error for Maya 2017 and 2018

Version 1.0.1
^^^^^^^^^^^^

**Fixed Bugs:**

- Fixed a bug where accidental duplication (Ctrl+D) of path curve led to unexpected behavior of layers
- Other minor improvements

Version 1.0.05
^^^^^^^^^^^^^

**Improvements:**

- Supported Maya versions now have separate plugins for better compatibility. Report bugs with Maya version attached.

**Fixed Bugs:**

- Fixed huge Shelf icons some users of Maya 2018 and 2017 have experienced
- Fixed a few bugs in Maya 2017 version

Version 1.0
^^^^^^^^^^^

- Initial Release
