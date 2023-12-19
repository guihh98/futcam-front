import { LeftMenu } from "./styles"
import { MenuOption } from "../../components/menuOption"
import { faImage, faUsers, faVideo, faBackward } from "@fortawesome/free-solid-svg-icons"
import { ROUTES } from "../../sharedKernel/constants/routes"
import { useNavigate } from "react-router"

export const SettingsPage = (): JSX.Element => { 
    const navigate = useNavigate()
    return (
        <LeftMenu>
            <MenuOption optionText="Usuários" icon={faUsers} color="#ffffff"/>
            <MenuOption optionText="Cameras" icon={faVideo} color="#ffffff"/>
            <MenuOption optionText="Galeria" icon={faImage} color="#ffffff"/>
            <div className="mt-auto ">
                <MenuOption optionText="Voltar" color="red" icon={faBackward} onClick={() => navigate(ROUTES.HUB.CAMERAS)}/>
            </div>
        </LeftMenu>
    )
}