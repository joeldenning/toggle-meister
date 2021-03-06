import React, { useEffect } from 'react';
// import Pillbox from 'cpr-multiselect';
import MultiSelect from 'cpr-multiselect';
import "cpr-multiselect/src/multi-selector.css";
import { getEnvList } from '../table/toggle-table.helpers.js';
import { getSelectedEnvs } from './select-envs.helpers.js';
import { chain, uniq, includes, partial } from 'lodash';

export default function SelectEnvs({toggles = [], setEnvs, envs}) {
  const envList = getEnvList(toggles);
  const selectedEnvs = envs;
  useInitializeSelectedEnvs(setEnvs)

  const items = envList.map(toPillboxItem);
  const selectedItems = items.filter(item => includes(selectedEnvs, item.label));


  return (
    <MultiSelect
      items={items}
      onChange={itemsChanged}
      getItemTitle={i => i.label}
      placeholder={"Select environments..."}	
      initialSelectedItems={selectedItems}
    />
  )

  function itemsChanged(selectedItems) {
    setSelectedEnvs(selectedItems)
  }

  function setSelectedEnvs(envItems) {
    const envs = chain(envItems)
      .map(item => item.label)
      .concat("production")
      .uniq()
      .value();

    window.localStorage.setItem(`selected-envs`, JSON.stringify(envs));
    setEnvs(envs)
  }
}

function toPillboxItem(env) {
  return {
    label: env,
    value: env,
  };
}

function useInitializeSelectedEnvs(setEnvs) {
  useEffect(() => {
    setEnvs(getSelectedEnvs())
  }, [])
}

