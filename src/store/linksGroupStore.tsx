import create from 'zustand';

interface LinksGroupState {
  openedLinks: Record<string, boolean>;
}

export const useLinksGroupStore = create<LinksGroupState>((set) => ({
  openedLinks: {},
  toggleGroup: (label: string) =>
    set((state) => ({
      openedLinks: {
        ...state.openedLinks,
        [label]: !state.openedLinks[label],
      },
    })),
}));
export const LinksGroupProvider = useLinksGroupStore;