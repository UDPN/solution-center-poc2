import { getLS } from 'libs/utils';
import { useEffect, useMemo, useState } from 'react';

export const useMenuHook = () => {
  const [userPermission, setUserPermission] = useState<Array<string>>([]);
  const items: MenuProps['items'] = useMemo(() => {
    return [];
  }, [userPermission]);

  useEffect(() => {
    const _userPermission = getLS<Array<string>>('userPermission');
    setUserPermission(_userPermission);
  }, []);

  return {
    items,
  };
};
