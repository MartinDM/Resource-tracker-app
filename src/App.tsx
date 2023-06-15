import { useEffect } from 'react';
import InputForm from './InputForm'
import ResourceList from './ResourceList'
import "./App.scss";
import { IResource } from "./types";
import { useLocalStorage } from './helpers';

function App() {
  const [resources, setResources] = useLocalStorage([], 'resources');
  const [deletedResources, setDeletedResources] = useLocalStorage([], 'deleted');

  const addResource = (resource: IResource) => {
    const newResources: IResource[] = [...resources, resource]
    setResources(newResources)
  }

  const removeResource = (id: string) => {
    const deletedResource: IResource[] = resources.filter((r: IResource) => r.id === id)[0]
    setDeletedResources([...deletedResources, deletedResource])

    const newResources: IResource[] = resources.filter((r: IResource) => r.id !== id)
    setResources(newResources)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey && e.code === 'KeyZ') {
        if (deletedResources.length) {
          const lastDeletedResource = deletedResources[0];
          addResource(lastDeletedResource)
          setDeletedResources([...deletedResources.filter((r: IResource) => r.id !== lastDeletedResource.id)])
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
  }, [deletedResources])

  return (
    <>
      <header style={{ padding: 0 }}>
        <h1 style={{ fontSize: '2em' }}>Resource Tracker</h1>
      </header>
      <main className="app">
        <InputForm addResource={addResource} />
        <ResourceList resources={resources} removeResource={removeResource} />
      </main>
    </>
  );
}

export default App;
