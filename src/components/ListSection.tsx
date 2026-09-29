import type { ListSectionProps } from "../types/palinka";
 
export function ListSection({
  cim,
  tartalom,
  rendelt = false,
}: ListSectionProps) {
  if (rendelt) {
    return (
      <div className="col-sm-4 kartya mb-2">
        <h2>{cim}</h2>
 
        <ol className="list-group list-group-numbered">
          {tartalom.map((item) => (
            <li
              key={item}
              className="list-group-item"
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  }
 
  return (
    <div className="col-sm-4 kartya mb-2">
      <h2>{cim}</h2>
 
      <ul className="list-group">
        {tartalom.map((item) => (
          <li
            key={item}
            className="list-group-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
 