import { Card } from "@material-tailwind/react";

export default function GifGridLoading() {
    return (
        <Card className="w-full grid grid-cols-2 gap-4 md:grid-cols-4 animate-pulse p-4 h-[30rem]">
        <div className="grid grid-rows-[1fr,2fr,1fr] gap-4 h-full">
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
        </div>
        <div className="grid grid-rows-[2fr,1fr,1fr] gap-4 grid-">
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
        </div>
        <div className="grid grid-rows-[1fr,1fr] gap-4 grid-">
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
        </div>
        <div className="grid grid-rows-[2fr,2fr,1fr] gap-4 grid-">
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
            <div className="bg-gray-300 h-auto max-w-full rounded-lg"></div>
        </div>
        </Card>
    );
}
