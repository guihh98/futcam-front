import { LeftMenu } from "./styles"
import { MenuOption } from "../../components/menuOption"
import { faImage, faUsers, faVideo, faBackward } from "@fortawesome/free-solid-svg-icons"

export const SettingsPage = (): JSX.Element => { 
    return (
        <LeftMenu>
            <MenuOption optionText="Usuários" icon={faUsers} color="#ffffff"/>
            <MenuOption optionText="Cameras" icon={faVideo} color="#ffffff"/>
            <MenuOption optionText="Galeria" icon={faImage} color="#ffffff"/>
            <div className="mt-auto ">
                <MenuOption optionText="Voltar" color="red" icon={faBackward} onClick={() => window.history.back()}/>
            </div>
        </LeftMenu>
    )
}