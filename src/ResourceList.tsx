import { useEffect } from "react";
import { IResource } from "./types";
import { TiDeleteOutline } from "react-icons/ti";

interface ResourceListProps {
    resources: IResource[]
    removeResource: Function;
}

function ResourceList(props: ResourceListProps) {
    const { resources, removeResource } = props

    const handleRemove = (id: number) => {
        removeResource(id)
    }

    useEffect(() => {
    }, [resources]);

    return (
        <>
            <h4>Resource List</h4>
            {
                !!resources.length && (
                    <ul>
                        {resources
                            .sort((a: IResource, b: IResource) => b.date - a.date)
                            .map((r: IResource) =>
                                <li key={r.id}>
                                    <p><strong>Id:</strong>{r.id}</p>
                                    <p><strong>Type:</strong>{r.type}</p>
                                    <p><strong>Date added:</strong>{r.date.toString()}</p>
                                    {!!r.description && <p><strong>Description:</strong> {r.description}</p>}
                                    <button type="button" onClick={(e) => handleRemove(r.id)}>Remove item <TiDeleteOutline /></button>
                                </li>
                            )}
                    </ul >
                )
            }
        </>
    )
}

export default ResourceList;
