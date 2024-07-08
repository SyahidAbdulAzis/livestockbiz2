
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,

    Accordion,
    AccordionHeader,

} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {

} from "@heroicons/react/24/outline";

export function SidebarWithLogoGov({ handleTabChange }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleClickLivestock = () => {
        handleTabChange("livestockGov");
    };

    const handleClickSellRecords = () => {
        handleTabChange("sellrecordsGov");
    };

    const handleClickDashboard = (tab) => {
        handleTabChange("dashboardData");
    }

    const handleClickProfile = (tab) => {
        handleTabChange("profileGov");
    }



    const handleClickMapData = (tab) => {
        handleTabChange("mapData");
    }

    return (
        <Card className="sidebar h-screen w-full max-w-[20rem] rounded-none" style={{ boxShadow: 'none' }}>
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="/assets/logo.png" alt="brand" className="h-12 w-12" />
            </div>
            <List>
                <Accordion
                    open={open === 1}
                >
                    <ListItem className="p-0" selected={open === 1} onClick={handleClickDashboard}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                </Accordion>



                <ListItem onClick={handleClickSellRecords}>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Sell Records

                </ListItem>
                <ListItem onClick={handleClickProfile}>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>

                <ListItem onClick={handleClickMapData}>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Animal Distribution Map
                </ListItem>

                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to='/home'>Log Out</Link>
                </ListItem>
            </List>
        </Card>
    );
}
