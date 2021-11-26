<?php

// Burada gelen veriler alinacak ve degiskenlere atanacak.

require("connect.php");

q = "INSERT INTO event_calendar(calendarId,
                                title,
                                isAllDay,
                                event_start,
                                event_end,
                                category,
                                dueDateClass,
                                color,
                                bgColor,
                                dragBgColor,
                                borderColor,
                                event_location,
                                event_state) 
    VALUES('$calendarId',
           '$title',
           '$isAllDay',
           '$event_start',
           '$event_end,',
           '$category',
           '$dueDateClass',
           '$color',
           '$bgColor',
           '$dragBgColor',
           '$borderColor,
           '$event_location',
           '$event_state')";
    

    myQuery($q);
?>