type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        payload: M[Key]
        type: Key
      }
}

export type ReducerActionTypes<T extends { [index: string]: unknown }> = ActionMap<T>[keyof ActionMap<T>]
