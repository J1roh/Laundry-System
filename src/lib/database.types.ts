
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  
  "graphql_public": {
          Tables: {
            [_ in never]: never
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            "graphql":
{ Args: { "extensions"?: Json,"operationName"?: string,"query"?: string,"variables"?: Json }; Returns: Json
                           }
          }
          Enums: {
            [_ in never]: never
          }
          CompositeTypes: {
            [_ in never]: never
          }
        },"public": {
          Tables: {
            "addons": {
                  Row: {
                    "active": boolean,"created_at": string,"id": string,"name": string,"price": number,"sort": number
                  }
                  ComputedFields: never
                  Insert: {
                    "active"?: boolean,"created_at"?: string,"id"?: string,"name": string,"price": number,"sort"?: number
                  }
                  Update: {
                    "active"?: boolean,"created_at"?: string,"id"?: string,"name"?: string,"price"?: number,"sort"?: number
                  }
                  Relationships: [
                    
                  ]
                },"customers": {
                  Row: {
                    "created_at": string,"id": string,"name": string,"phone": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"id"?: string,"name": string,"phone": string
                  }
                  Update: {
                    "created_at"?: string,"id"?: string,"name"?: string,"phone"?: string
                  }
                  Relationships: [
                    
                  ]
                },"machines": {
                  Row: {
                    "created_at": string,"id": string,"label": string,"status": Database["public"]['Enums']["machine_status"]
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"id"?: string,"label": string,"status"?: Database["public"]['Enums']["machine_status"]
                  }
                  Update: {
                    "created_at"?: string,"id"?: string,"label"?: string,"status"?: Database["public"]['Enums']["machine_status"]
                  }
                  Relationships: [
                    
                  ]
                },"order_addons": {
                  Row: {
                    "addon_id": string | null,"name": string,"order_id": string,"price": number
                  }
                  ComputedFields: never
                  Insert: {
                    "addon_id"?: string | null,"name": string,"order_id": string,"price": number
                  }
                  Update: {
                    "addon_id"?: string | null,"name"?: string,"order_id"?: string,"price"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "order_addons_addon_id_fkey"
      columns: ["addon_id"]
isOneToOne: false
      referencedRelation: "addons"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "order_addons_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "order_details"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "order_addons_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    }
                  ]
                },"orders": {
                  Row: {
                    "cashier_id": string,"code": string,"created_at": string,"customer_id": string | null,"customer_type": Database["public"]['Enums']["customer_type"],"id": string,"machine_id": string | null,"payment_method": Database["public"]['Enums']["payment_method"],"price_per_kg": number,"service_type": Database["public"]['Enums']["service_type"],"status": Database["public"]['Enums']["order_status"],"subtotal": number,"total": number,"updated_at": string,"weight_kg": number
                  }
                  ComputedFields: never
                  Insert: {
                    "cashier_id": string,"code": string,"created_at"?: string,"customer_id"?: string | null,"customer_type": Database["public"]['Enums']["customer_type"],"id"?: string,"machine_id"?: string | null,"payment_method": Database["public"]['Enums']["payment_method"],"price_per_kg": number,"service_type": Database["public"]['Enums']["service_type"],"status"?: Database["public"]['Enums']["order_status"],"subtotal": number,"total": number,"updated_at"?: string,"weight_kg": number
                  }
                  Update: {
                    "cashier_id"?: string,"code"?: string,"created_at"?: string,"customer_id"?: string | null,"customer_type"?: Database["public"]['Enums']["customer_type"],"id"?: string,"machine_id"?: string | null,"payment_method"?: Database["public"]['Enums']["payment_method"],"price_per_kg"?: number,"service_type"?: Database["public"]['Enums']["service_type"],"status"?: Database["public"]['Enums']["order_status"],"subtotal"?: number,"total"?: number,"updated_at"?: string,"weight_kg"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "orders_cashier_id_fkey"
      columns: ["cashier_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_customer_id_fkey"
      columns: ["customer_id"]
isOneToOne: false
      referencedRelation: "customers"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_machine_id_fkey"
      columns: ["machine_id"]
isOneToOne: false
      referencedRelation: "machines"
      referencedColumns: ["id"]
    }
                  ]
                },"profiles": {
                  Row: {
                    "created_at": string,"display_name": string,"id": string,"role": Database["public"]['Enums']["user_role"],"username": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"display_name": string,"id": string,"role"?: Database["public"]['Enums']["user_role"],"username": string
                  }
                  Update: {
                    "created_at"?: string,"display_name"?: string,"id"?: string,"role"?: Database["public"]['Enums']["user_role"],"username"?: string
                  }
                  Relationships: [
                    
                  ]
                },"settings": {
                  Row: {
                    "address": string,"id": number,"phone": string,"price_per_kg": number,"receipt_footer": string,"shop_name": string,"shop_subtitle": string,"updated_at": string
                  }
                  ComputedFields: never
                  Insert: {
                    "address"?: string,"id"?: number,"phone"?: string,"price_per_kg"?: number,"receipt_footer"?: string,"shop_name"?: string,"shop_subtitle"?: string,"updated_at"?: string
                  }
                  Update: {
                    "address"?: string,"id"?: number,"phone"?: string,"price_per_kg"?: number,"receipt_footer"?: string,"shop_name"?: string,"shop_subtitle"?: string,"updated_at"?: string
                  }
                  Relationships: [
                    
                  ]
                }
          }
          Views: {
            "order_details": {
                  Row: {
                    "addons": Json | null,"cashier_id": string,"cashier_name": string | null,"code": string,"created_at": string,"customer_id": string | null,"customer_name": string | null,"customer_phone": string | null,"customer_type": Database["public"]['Enums']["customer_type"],"id": string,"machine_id": string | null,"machine_label": string | null,"payment_method": Database["public"]['Enums']["payment_method"],"price_per_kg": number,"service_type": Database["public"]['Enums']["service_type"],"status": Database["public"]['Enums']["order_status"],"subtotal": number,"total": number,"weight_kg": number
                  }
                  ComputedFields: never
                  Relationships: [
                    {
      foreignKeyName: "orders_cashier_id_fkey"
      columns: ["cashier_id"]
isOneToOne: false
      referencedRelation: "profiles"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_customer_id_fkey"
      columns: ["customer_id"]
isOneToOne: false
      referencedRelation: "customers"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_machine_id_fkey"
      columns: ["machine_id"]
isOneToOne: false
      referencedRelation: "machines"
      referencedColumns: ["id"]
    }
                  ]
                }
          }
          Functions: {
            "create_order":
{ Args: { "payload": Json }; Returns: {
              "cashier_id": string,
"code": string,
"created_at": string,
"customer_id": string | null,
"customer_type": Database["public"]['Enums']["customer_type"],
"id": string,
"machine_id": string | null,
"payment_method": Database["public"]['Enums']["payment_method"],
"price_per_kg": number,
"service_type": Database["public"]['Enums']["service_type"],
"status": Database["public"]['Enums']["order_status"],
"subtotal": number,
"total": number,
"updated_at": string,
"weight_kg": number
            }
                          SetofOptions: {
        from: "*"
        to: "orders"
        isOneToOne: true
        isSetofReturn: false
      } },
"is_admin":
{ Args: Record<PropertyKey, never>; Returns: boolean
                           }
          }
          Enums: {
            "customer_type": "walk-in"|"returning","machine_status": "idle"|"in_use"|"maintenance","order_status": "pending"|"washing"|"done"|"claimed","payment_method": "cash"|"qr","service_type": "self-service"|"full-service","user_role": "cashier"|"admin"
          }
          CompositeTypes: {
            [_ in never]: never
          }
        }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  "graphql_public": {
          Enums: {
            
          }
        },"public": {
          Enums: {
            "customer_type": ["walk-in", "returning"],"machine_status": ["idle", "in_use", "maintenance"],"order_status": ["pending", "washing", "done", "claimed"],"payment_method": ["cash", "qr"],"service_type": ["self-service", "full-service"],"user_role": ["cashier", "admin"]
          }
        }
} as const
