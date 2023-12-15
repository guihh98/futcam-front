import { LeftMenu } from "./styles"
import { MenuOption } from "../../components/menuOption"
import { faImage, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons"

export const SettingsPage = (): JSX.Element => { 
    return (
        <LeftMenu>
            <MenuOption optionText="Usuários" icon={faUsers}/>
            <MenuOption optionText="Cameras" icon={faVideo}/>
            <MenuOption optionText="Galeria" icon={faImage}/>
        </LeftMenu>
    )
}