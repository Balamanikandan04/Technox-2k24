import { BackgroundBeams } from "./ui/BackgroundBeams"
import { PinContainer } from "./ui/ThreeDPin"

function JoinUsComponent() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="py-10 mx-4">
        <div className="h-[40vh] w-full flex items-center justify-center ">
            <PinContainer
            title="13th April"
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39299.54253675115!2d80.17674090151625!3d12.85692201085655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0554775e57%3A0x191bc5eec274319!2sAgni%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1712651298392!5m2!1sen!2sin" 
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-slate-100 text-3xl">
                    TECHNOX 2K24
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-xl">
                    COME JOIN US ON
                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>
    </div>
      <BackgroundBeams />
    </div>
  )
}

export default JoinUsComponent
