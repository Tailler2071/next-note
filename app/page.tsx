import {Header} from "@/components/shared";
import {Button, Input} from "@/components/ui";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <h1 className="text-4xl mb-6">Home</h1>
                <div className="grid gap-4 p-4 bg-blue-900">
                    <div className="w-96 grid gap-2">
                        <h2 className="font-bold text-lg">Кнопки</h2>
                        <Button>Кнопка </Button>
                        <Button variant={"secondary"}>Кнопка </Button>
                        <Button variant={"outline"}>Кнопка </Button>
                    </div>
                    <div className="w-96 grid gap-2">
                        <Input/>
                        <Input type={"text"}/>
                        <Input type="email" placeholder="Email"/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;