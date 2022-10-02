import React from "react";

const aladin = () => {
    return (
        <>
            <link rel="stylesheet" href="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.css" />
            
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.1.min.js" charset="utf-8"></script>
            
            <div id="aladin-lite-div" style="width:500px;height:500px;"></div>
            <script type="text/javascript" src="https://aladin.u-strasbg.fr/AladinLite/api/v2/latest/aladin.min.js" charset="utf-8"></script>
            <script type="text/javascript">
                let aladin = A.aladin('#aladin-lite-div', [survey: "P/DSS2/color", fov:60, target: "90 +  6"]);
            </script>
        </>
    )
}