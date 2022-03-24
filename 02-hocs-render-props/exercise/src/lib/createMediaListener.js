/*
const listener = createMediaListener({
  mobile: "(max-width: 767px)",
  small: "(max-width: 568px), (max-height: 400px)"
})

listener.listen((state) => {})
listener.getState()
listenter.dispose()
*/

export default media => {
  console.log("---------------media -------------")  
  console.log(media)

  let transientListener = null;

  const mediaKeys = Object.keys(media);
  console.log("---------------media keys-------------")
  console.log(mediaKeys)

  const queryLists = mediaKeys.reduce((queryLists, key) => {
    console.log("--------------reduce function on media keys ---------------")
    console.log(queryLists)
    console.log(key)
    queryLists[key] = window.matchMedia(media[key]);
    console.log(media[key])
    return queryLists;
  }, {});

  console.log("---------------queryLsts ----------")
  console.log(queryLists)

  const mediaState = mediaKeys.reduce((state, key) => {
    state[key] = queryLists[key].matches;
    return state;
  }, {});
  console.log("-------------mediaState---------")
  console.log(mediaState)

  const notify = () => {
    if (transientListener != null) transientListener(mediaState);
  };
  console.log("-----------notify---------")
  console.log(notify)

  const mutateMediaState = (key, val) => {
    mediaState[key] = val;
    notify();
  };
  console.log("----------mutatemediastate-------")
  console.log(mutateMediaState)

  const listeners = mediaKeys.reduce((listeners, key) => {
    listeners[key] = event => {
      mutateMediaState(key, event.matches);
    };
    return listeners;
  }, {});
  console.log("-----------listeners------")
  console.log(listeners)

  const listen = listener => {
    transientListener = listener;
    mediaKeys.forEach(key => {
      queryLists[key].addListener(listeners[key]);
    });
  };
  console.log("-----------listen-------")
  console.log(listen)

  const dispose = () => {
    transientListener = null;
    mediaKeys.forEach(key => {
      queryLists[key].removeListener(listeners[key]);
    });
  };
  console.log("-----------dispose-------")
  console.log(dispose)

  const getState = () => mediaState;

  return { listen, dispose, getState };
};
