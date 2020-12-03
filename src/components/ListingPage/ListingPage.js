import React from "react";
import "./ListingPage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function ListingPage() {
  return (
    <div className="listingPage">
      <div className="listingPage__fullCalendar">
        <FullCalendar
          height={600}
          // aspectRatio={2}
          plugins={[interactionPlugin, dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "dayGridWeek,dayGridMonth,dayGridDay",
            center: "title",
            end: "today prev,next",
          }}
          selectable={true}
          events={[
            {
              title: "10/20",
              start: "2020-12-01",
              backgroundColor: "rgb(32, 212, 137, .4)",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ListingPage;
