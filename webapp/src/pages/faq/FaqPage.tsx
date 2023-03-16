import NoAuthenticatedLayout from "src/layouts/NoAuthenticatedLayout";

function FaqPage({...props}){
    return (
    <NoAuthenticatedLayout>
        <p>Página de FAQ</p>
    </NoAuthenticatedLayout>);
}

export default FaqPage;