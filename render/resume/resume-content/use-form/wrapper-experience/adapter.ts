export interface AdapterExperienceType {
    /**
     * @description 标题
     */
    title?: string;
    /**
     * @description 职位
     */
    post?: string;
    /**
     * @description 主要工作
     */
    content?: string;
    parseContent?: string[];
    /**
     * @description 开始时间
     */
    beginTime?: number | string | undefined;
    /**
     * @description 结束时间
     */
    endTime?: number | string | undefined;
    /**
     * @description 额外补充内容
     */
    supplement?: string;
    /**
     * @description 最后编辑时间
     */
    date?: number;
  }