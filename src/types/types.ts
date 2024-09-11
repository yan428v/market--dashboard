export interface CampaignStatistics {
    id: number;
    userId: number;
    marketId: number;
    accountId: number;
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
export interface IUser {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    status: number;
    role: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface DailyStatistics {

    id:number;
    date: string;
    dayOfWeek: string;
    clicks: number;
    impressions: number;
    avgCpc: number;
    cost: number;
    conversions: number;
    costPerConversion: number;
    ctr: number;
}
interface DailyStatistic {
    id: number;
    date: string;
    clicks: number;
    cost: number;
    conversions: number;
}

interface TotalStatistics {
    clicks: number;
    cost: number;
    conversions: number;
}

export interface ChartStatistics {
        dailyStatistics: DailyStatistic[];
        totalStatistics: TotalStatistics;
}

interface BaseStatistics {
    id: number;
    date: string;
    clicks: number;
    impressions: number;
    cost: number;
    ctr: number;
    avgCpc: number;
    conversions: number;
    costPerConversion: number;
    [key: string]: string | number; // индексная подпись для поддержки строковых индексов
}

// Полная статистика, расширяет общую статистику
export interface CampaignStatistics extends BaseStatistics {
    campaignName: string;
}

// Дневная статистика, расширяет общую статистику
export interface DailyStatistics extends BaseStatistics {
    dayOfWeek: string;
}

// Тип для заголовка таблицы
export interface HeadCell {
    disablePadding: boolean;
    id: keyof (CampaignStatistics | DailyStatistics); // Типизация ключей на основе объединенного интерфейса
    label: string;
    numeric: boolean;
}

export interface IMarket {

    marketId: number;
    userId: number;
    marketName: string;
    token: string;
}
















