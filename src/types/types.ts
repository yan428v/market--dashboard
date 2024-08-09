export interface CampaignStatistics {
    id: number;
    user_id: number;
    account_id: number;
    campaignName: string;
    date: string;
    clicks: number;
    cost: number;
    ctr: number;
    avgCpc: number;
    conversions: number;
    costPerConversion: number;
    impressions: number;
}
