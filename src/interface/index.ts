interface ISidebarProps {
	path: string;
	name: string;
	icon: JSX.Element | string;
}

interface TabData {
    title: string;
    color: string;
    avgWatchTime?: string;
    likes?: number;
    engagements?: number;
    avgListeningDuration?: string;
    uniqueListeners?: number;
    shareRate?: string;
    download?: number;
    avgReadTime?: string;
    pageViews?: number;
    contentLikes?: number;
    contentShares?: number;
}