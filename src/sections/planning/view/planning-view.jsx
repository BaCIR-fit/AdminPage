import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Container from '@mui/material/Container';
import "./planning.css";

import { getPlanning } from 'src/_mock/planning';
import { forEach } from 'lodash';

import NewModal from 'src/components/modal/createEvent';

import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function PlanningView() {

    const eventsFromApi = [];

    const planningFromApi = getPlanning

    // console.log(planningFromApi);

    if (planningFromApi && planningFromApi.length > 0) {
        const planningEvent = planningFromApi[0];

        forEach(planningEvent, (event) => {
            // Vérifier si event.activity_date est défini et dans un format valide
            if (event.activity_date && typeof event.activity_date === 'string') {
                const startEvent = new Date(event.activity_date);

                const activityDuration = parseInt(event.activity_time_duration, 10);

                const endEvent = new Date(startEvent.getTime() + (activityDuration || 0) * 60 * 60 * 1000);

                eventsFromApi.push({
                    title: `${event.activity_name} par ${event.coach_name}`,
                    start: startEvent,
                    end: endEvent,
                });

            } else {
                console.error('La date de l\'événement est manquante ou invalide.');
            }
        });
    }


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [initialSettings] = useState({
        "Titre": "",
        "Coach": "",
        "Date_du_début": "",
        "Durée": "",
        "Salle": "",
        "Club": "",
    });


    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Planning</Typography>

                <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenModal}>
                    Nouvelle activitée
                </Button>
            </Stack>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                locale="fr"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridWeek,timeGridDay'
                }}
                views={{
                    timeGrid: {
                        dayHeaderFormat: { weekday: 'long' },
                        slotDuration: { hours: 1 },
                        allDaySlot: false,
                        dayHeaderContent: (arg) => {
                            const date = new Date(arg.date);
                            return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'numeric' });
                        },
                    }
                }}
                events={eventsFromApi}
                slotMinTime="07:00:00"
                slotMaxTime="23:00:00"
                contentHeight="auto"
                editable
                eventClick={(e) => alert(`Titre: ${e.event.title}\nDébut: ${e.event.start}\nFin: ${e.event.end}`)}
            />
            <NewModal settings={initialSettings} open={isModalOpen} onClose={handleCloseModal} />

        </Container>
    );
}
