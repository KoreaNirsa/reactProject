import HeaderComponent from "../../components/common/headerComponent"
import NavComponent from "../../components/common/navComponent"
import FooterComponent from "../../components/common/footerComponent"
import ListComponent from "../../components/board/ListComponent"

export default function List() {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <NavComponent></NavComponent>
            <ListComponent></ListComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}