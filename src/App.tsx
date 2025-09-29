import { useEffect, useCallback } from 'react';
import InputForm from './InputForm';
import ResourceList from './ResourceList';
import './App.scss';
import { IResource } from './types';
import { useLocalStorage } from './helpers';

function App() {
  const [resources, setResources] = useLocalStorage([], 'resources');
  const [deletedResources, setDeletedResources] = useLocalStorage(
    [],
    'deleted'
  );

  const addResource = useCallback(
    (resource: IResource) => {
      const newResources: IResource[] = [...resources, resource];
      setResources(newResources);
    },
    [resources, setResources]
  );

  const removeResource = (id: string) => {
    const deletedResource: IResource | undefined = resources.find(
      (r: IResource) => r.id === id
    );

    console.log('Current deletedResources:', deletedResources);
    console.log('Resource to delete:', deletedResource);

    if (deletedResource) {
      const newDeletedResources = [...deletedResources, deletedResource];
      setDeletedResources(newDeletedResources);
      console.log('Updated deletedResources:', newDeletedResources);
    }

    const newResources: IResource[] = resources.filter(
      (r: IResource) => r.id !== id
    );
    setResources(newResources);
  };

  useEffect(() => {
    //console.log(deletedResources);
  }, [deletedResources]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey && e.code === 'KeyZ') {
        if (deletedResources.length) {
          // Get the last deleted resource (most recently deleted)
          const lastDeletedResource =
            deletedResources[deletedResources.length - 1];
          addResource(lastDeletedResource);
          // Remove the last item from deletedResources
          setDeletedResources(deletedResources.slice(0, -1));
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [deletedResources, addResource, setDeletedResources]);

  return (
    <>
      <header style={{ padding: 0 }}>
        <h1 style={{ fontSize: '2em' }}>Resource Tracker</h1>
      </header>
      <main className="app">
        <InputForm thing={'sfd'} addResource={addResource} />
        <ResourceList resources={resources} removeResource={removeResource} />
      </main>
    </>
  );
}

export default App;
