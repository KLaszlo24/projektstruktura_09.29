import type {IntroCardProps} from "../types/palinka.ts"

export function IntroCard({paragrafusok}: IntroCardProps){
    return(
        <div className="row mb-2">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">Mit érdemes tudni a pálinkáról?</div>

            <div className="card-body">
                {paragrafusok.map((paragrafus, index)=>(
                    <p key={paragrafus} 
                    className={index===paragrafusok.length -1
                        ? "mb-0"
                        : undefined
                    }
                    >
                        {paragrafus}

                    </p>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    )
}