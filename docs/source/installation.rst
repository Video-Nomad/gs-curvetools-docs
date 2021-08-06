.. currentmodule:: <index>

.. role:: strike
    :class: strike

########################################
Installation, Shelf, Hotkeys and Updates
########################################

Installation Steps
^^^^^^^^^^^^^^^^^^

.. warning:: Only **Windows** version is **fully supported**. **Mac** version is currently in **beta test** and may have some bugs. **Linux** was not tested and currently **not supported**. **Maya LT** was not tested and currently **not supported**.

0. :strike:`Pay for WinRAR`

#. Unpack and copy **gs_curvetools** folder to:

	- **Windows:** Documents/Maya/{Maya_Version}/scripts/
	- **Mac:** {Your_Mac_Name}/⁨Users⁩/{User_Name}/⁨Library/⁨Preferences⁩/⁨Autodesk⁩/⁨maya/{Maya_Version}/scripts/⁩

    .. figure:: images/installation/folder_structure.png
        :alt: Folder Structure Example
        :class: with-shadow
        :width: 600px
        :align: center

        Windows Folder Structure Example

    .. figure:: images/installation/folder_structure_mac.png
        :alt: Folder Structure Example
        :class: with-shadow
        :width: 600px
        :align: center

        Mac Folder Structure Example

#. Run **Maya**

#. Copy and Paste this code to **Python Command Field** at the bottom (switch from MEL by clicking on it) or to the script editor:

    .. code-block:: python

        import gs_curvetools.init as ct_init;from imp import reload;reload(ct_init);ct_init.Init();


#. **Run the code** (Press Enter for the Command Field or press on triangle for script editor). Installation is complete.

.. figure:: images/installation/script_editor_paste.png
	:alt: Folder Structure Example
	:class: with-shadow
	:width: 300px
	:align: center
    
Main Menu, Resetting and Stopping
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: images/installation/menu_buttons.png
    :alt: Maya Shelf
    :class: with-shadow float-right
    :width: 200px

After `Installation Steps`_ **GS** tab will appear on **Maya Shelf**.

.. figure:: images/buttons/gs_ui.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT UI button will open/close GS CurveTools User Interface.

.. figure:: images/buttons/gs_reset.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT Reset will reset GS CurveTools to its default state.

.. figure:: images/buttons/gs_del.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT Del will close GS CurveTools UI and stop any background scripts.

.. note:: You can use middle mouse drag to drag these buttons to any tab on the shelf.

Hotkeys
^^^^^^^

After you Initialize_ the plug-in you can find all the hotkeys in::

    Hotkey Editor -> Custom Scripts -> GS -> GS_CurveTools

.. _Initialize: `Installation Steps`_

Updating the Plug-in
^^^^^^^^^^^^^^^^^^^^

To update the plug-in to a new version just **delete** the old **gs_curvetools** folder and repeat the `Installation Steps`_.