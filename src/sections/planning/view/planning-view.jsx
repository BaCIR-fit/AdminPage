import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Container from '@mui/material/Container';
import "./planning.css";



// ----------------------------------------------------------------------

export default function PlanningView() {
return (
<Container>
<FullCalendar
        plugins={[timeGridPlugin,interactionPlugin]}
        initialView="timeGridWeek"
        locale="fr"
        headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
        }}
        views={{
        timeGrid: {
            dayHeaderFormat: { weekday: 'long' }, // Format du jour de la semaine
            slotDuration: { hours: 1 }, // Durée de chaque intervalle de la timeline*
            allDaySlot: false,
            dayHeaderContent: (arg) => {
                // Personnalisez le contenu du haut de chaque colonne de jour
                const date = new Date(arg.date);
                return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'numeric' });
            },
        }
        }}
        events={[
        { title: 'Event 1', start: '2024-01-20T10:00:00', end: '2024-01-20T12:00:00' },
        { title: 'Event 2', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00' },
          // ... Ajoutez d'autres événements avec leurs horaires
        ]}
        slotMinTime="07:00:00" // Heure de début des plages horaires
        slotMaxTime="23:00:00" // Heure de fin des plages horaires
        contentHeight="auto"
        editable
        
    />

</Container>
);
}
