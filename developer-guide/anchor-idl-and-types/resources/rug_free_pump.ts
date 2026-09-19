/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/rug_free_pump.json`.
 */
export type RugFreePump = {
  "address": "9hpBPEiywp7FPAq5uP253eAZzdJ1Cpd36L5RAYuc9xSw",
  "metadata": {
    "name": "rugFreePump",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Rug Free Pump — decentralized bonding curve token launchpad"
  },
  "instructions": [
    {
      "name": "addUpdateRemoveNetProfitPdaStakeholders",
      "discriminator": [
        155,
        64,
        153,
        86,
        163,
        70,
        211,
        177
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "action",
          "type": {
            "defined": {
              "name": "stakeholdersAction"
            }
          }
        }
      ]
    },
    {
      "name": "addUpdateRemovePayrollsBonusesPdaEmployees",
      "discriminator": [
        138,
        242,
        55,
        108,
        231,
        73,
        200,
        151
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "action",
          "type": {
            "defined": {
              "name": "employeesAction"
            }
          }
        }
      ]
    },
    {
      "name": "approveGovernmentTaxPdaWithdrawalRequestByAuth",
      "discriminator": [
        213,
        221,
        146,
        209,
        7,
        90,
        192,
        228
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority (must match government_tax_pda_auth)"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "docs": [
            "Government Tax PDA (mutable, signer via seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "destination",
          "type": "pubkey"
        },
        {
          "name": "lamportsAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "approveMarketingExpensesPdaWithdrawalRequestByAuth",
      "discriminator": [
        169,
        57,
        95,
        244,
        16,
        92,
        137,
        243
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority (must match marketing_expenses_pda_auth)"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "docs": [
            "Marketing Expenses PDA (mutable, signer via seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "recipients",
          "type": {
            "vec": {
              "defined": {
                "name": "marketingExpensesPdaRecipient"
              }
            }
          }
        }
      ]
    },
    {
      "name": "approveNetProfitPdaStakeholdersListWithdrawalRequestByAuth",
      "discriminator": [
        210,
        226,
        208,
        254,
        140,
        162,
        16,
        159
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "netProfitVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newTickedUntickedStatus",
          "type": {
            "vec": "bool"
          }
        }
      ]
    },
    {
      "name": "approvePayrollsBonusesPdaEmployeeListWithdrawalRequestByAuth",
      "discriminator": [
        145,
        183,
        216,
        33,
        129,
        168,
        240,
        52
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "batchType",
          "type": {
            "defined": {
              "name": "paymentBatchType"
            }
          }
        },
        {
          "name": "newTickedUntickedStatus",
          "type": {
            "vec": "bool"
          }
        },
        {
          "name": "lamportsAmounts",
          "type": {
            "vec": "u64"
          }
        }
      ]
    },
    {
      "name": "approvePlatformExpensesPdaWithdrawalRequestByAuth",
      "discriminator": [
        192,
        246,
        99,
        166,
        7,
        200,
        45,
        41
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority — must match platform_expenses_pda_auth"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "docs": [
            "Platform Expenses PDA (mutable target)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "destination",
          "type": "pubkey"
        },
        {
          "name": "lamportsAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "approvePlatformPaymentsPdaShareholderListWithdrawalRequestByAuth",
      "discriminator": [
        25,
        127,
        181,
        169,
        115,
        96,
        89,
        219
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "docs": [
            "NetProfitPDA account (read-only)",
            "Used to check ticked status and allocation",
            "This ensures the correct PDA is referenced"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "netProfitVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newTickedUntickedStatus",
          "type": {
            "array": [
              "bool",
              6
            ]
          }
        }
      ]
    },
    {
      "name": "approveTreasuryPdaWithdrawalRequestByAuth",
      "discriminator": [
        241,
        156,
        202,
        103,
        31,
        227,
        152,
        197
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority (must match treasury_pda_auth)"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to validate PDA derivation"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "docs": [
            "Required to validate vault derivation"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "treasuryVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "destination",
          "type": "pubkey"
        },
        {
          "name": "lamportsAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buy",
      "discriminator": [
        102,
        6,
        61,
        18,
        1,
        218,
        235,
        234
      ],
      "accounts": [
        {
          "name": "buyer",
          "docs": [
            "The user sending SOL and receiving tokens"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "docs": [
            "The token mint being sold"
          ],
          "writable": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "docs": [
            "Global states PDA (tracks global sale settings)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "bondingCurvePda",
          "docs": [
            "Bonding curve PDA (tracks state for this token sale)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "bondingCurveVault",
          "docs": [
            "Bonding curve vault (SOL vault for this bonding curve)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "associatedBondingCurveAta",
          "docs": [
            "PDA’s token account (tokens available for sale)"
          ],
          "writable": true
        },
        {
          "name": "buyerAccumulationPda",
          "docs": [
            "Buyer accumulation PDA (tracks how much this buyer has purchased)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  117,
                  121,
                  101,
                  114,
                  45,
                  97,
                  99,
                  99,
                  117,
                  109,
                  117,
                  108,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "bondingCurvePda"
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "buyerAssociatedTokenAccount",
          "docs": [
            "Buyer’s ATA for receiving tokens (auto-create if missing)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "platformFeeVault",
          "docs": [
            "Platform fee vault (validated against seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "solUsdPriceFeed"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "lamportsAmount",
          "type": "u64"
        },
        {
          "name": "expectedTotalRaisedUsdE2",
          "type": "u64"
        },
        {
          "name": "expectedTotalSoldTokensE6",
          "type": "u64"
        },
        {
          "name": "slippageBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "cancelFinalizedSaleOnEmergency",
      "discriminator": [
        124,
        26,
        39,
        76,
        68,
        55,
        239,
        33
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createPool",
      "discriminator": [
        233,
        146,
        209,
        142,
        207,
        104,
        64,
        188
      ],
      "accounts": [
        {
          "name": "creator",
          "docs": [
            "The pool creator. Also the first buyer and the payer of all rents/fees."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "mintAuthority",
          "docs": [
            "Global mint authority PDA (only one for all mints)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116,
                  45,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "docs": [
            "Mint of the new token"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "bondingCurveVault",
          "docs": [
            "System-owned PDA used exclusively as the SOL vault for this bonding curve.",
            "It stores no data. The account is created automatically when first funded.",
            "Our program can authorize transfers from it using invoke_signed()."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "associatedBondingCurveAta",
          "docs": [
            "Associated Token Account for bonding curve vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "bondingCurveVault"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "metadata",
          "docs": [
            "Metadata PDA for the mint"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "const",
                "value": [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ]
            }
          }
        },
        {
          "name": "globalStatesPda",
          "docs": [
            "Global states PDA (tracks global sale settings)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "creatorAccumulationPda",
          "docs": [
            "creator accumulation PDA (tracks how much this buyer has purchased)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  117,
                  121,
                  101,
                  114,
                  45,
                  97,
                  99,
                  99,
                  117,
                  109,
                  117,
                  108,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "bondingCurvePda"
              },
              {
                "kind": "account",
                "path": "creator"
              }
            ]
          }
        },
        {
          "name": "creatorAssociatedTokenAccount",
          "docs": [
            "creator’s ATA for receiving tokens (auto-create if missing)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "platformFeeVault",
          "docs": [
            "Platform fee vault (validated against seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "solUsdPriceFeed"
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "lamportsAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "disableAutomateDexMigration",
      "discriminator": [
        11,
        41,
        127,
        155,
        119,
        155,
        118,
        144
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "disableFinalizedSaleFundsRecoveryMode",
      "discriminator": [
        151,
        43,
        235,
        247,
        31,
        142,
        126,
        76
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint being sold"
          ]
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "disableNewTokenMint",
      "discriminator": [
        129,
        23,
        149,
        151,
        230,
        222,
        187,
        215
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "disablePlatformMaintenanceMode",
      "discriminator": [
        98,
        43,
        232,
        27,
        211,
        252,
        74,
        107
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "disableTokenCreatorIncentive",
      "discriminator": [
        147,
        241,
        239,
        140,
        218,
        142,
        78,
        79
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "enableAutomateDexMigration",
      "discriminator": [
        23,
        12,
        63,
        191,
        70,
        186,
        183,
        27
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "enableFinalizedSaleFundsRecoveryMode",
      "discriminator": [
        219,
        181,
        88,
        238,
        126,
        38,
        188,
        126
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint being sold"
          ]
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "enableNewTokenMint",
      "discriminator": [
        171,
        31,
        16,
        73,
        91,
        64,
        123,
        126
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "enablePlatformMaintenanceMode",
      "discriminator": [
        137,
        255,
        217,
        144,
        43,
        110,
        203,
        106
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "enableTokenCreatorIncentive",
      "discriminator": [
        95,
        9,
        204,
        95,
        81,
        118,
        181,
        89
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": []
    },
    {
      "name": "initializePlatformData",
      "docs": [
        "Main entrypoint: initializes PlatformRegistryPDA and all child PDAs"
      ],
      "discriminator": [
        18,
        255,
        45,
        197,
        207,
        26,
        83,
        60
      ],
      "accounts": [
        {
          "name": "initializer",
          "writable": true,
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "programUpgradeAuthPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
                  45,
                  117,
                  112,
                  103,
                  114,
                  97,
                  100,
                  101,
                  45,
                  97,
                  117,
                  116,
                  104
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "migrateLiquidity",
      "discriminator": [
        131,
        168,
        36,
        158,
        107,
        147,
        151,
        163
      ],
      "accounts": [
        {
          "name": "cpmmProgram",
          "address": "DRaycpLY18LhpbydsBWbVJtxpNv9oXPgjRSfpF2bWpYb"
        },
        {
          "name": "userWallet",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "bondingCurveVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "ammConfig"
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  97,
                  110,
                  100,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  95,
                  115,
                  101,
                  101,
                  100
                ]
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "poolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "ammConfig"
              },
              {
                "kind": "account",
                "path": "token0Mint"
              },
              {
                "kind": "account",
                "path": "token1Mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "token0Mint"
        },
        {
          "name": "token1Mint"
        },
        {
          "name": "creatorBcVaultWsolAta",
          "docs": [
            "Used as Raydium creator_token_0 or creator_token_1 depending on mint ordering.",
            "The address is validated above; the account will be created inside the instruction."
          ],
          "writable": true
        },
        {
          "name": "creatorBcVaultTokenAta",
          "docs": [
            "Used as Raydium creator_token_0 or creator_token_1 depending on mint ordering."
          ],
          "writable": true
        },
        {
          "name": "lpMint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  108,
                  112,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "poolState"
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "creatorLpToken",
          "writable": true
        },
        {
          "name": "token0Vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "poolState"
              },
              {
                "kind": "account",
                "path": "token0Mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "token1Vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  111,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "poolState"
              },
              {
                "kind": "account",
                "path": "token1Mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "createPoolFee",
          "writable": true,
          "address": "3oE58BKVt8KuYkGxx8zBojugnymWmBiyafWgMrnb6eYy"
        },
        {
          "name": "observationState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  98,
                  115,
                  101,
                  114,
                  118,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "poolState"
              }
            ],
            "program": {
              "kind": "account",
              "path": "cpmmProgram"
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "token0Program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "token1Program",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "platformFeeVault",
          "docs": [
            "Canonical program vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "tokenCreatorIncentiveReceiver",
          "writable": true,
          "optional": true
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "recoverFinalizedSaleLiquidity",
      "discriminator": [
        12,
        211,
        40,
        68,
        160,
        174,
        94,
        193
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenMint",
          "docs": [
            "The token mint being sold"
          ],
          "writable": true
        },
        {
          "name": "bondingCurvePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "bondingCurveVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "associatedBondingCurveAta",
          "docs": [
            "PDA’s token account"
          ],
          "writable": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "adminAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "admin"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "globalStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "docs": [
            "Canonical program vault"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "tokenCreatorIncentiveReceiver",
          "writable": true,
          "optional": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "updateAdminStatesPdaAuth",
      "discriminator": [
        162,
        94,
        170,
        104,
        42,
        110,
        233,
        174
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateBondingcurveEscrowCompletedFee",
      "discriminator": [
        130,
        159,
        231,
        109,
        254,
        221,
        190,
        136
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newFeeBps",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateBondingcurveEscrowCreationFee",
      "discriminator": [
        46,
        163,
        72,
        241,
        37,
        213,
        94,
        204
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newFeeUsdE2",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateBuyFee",
      "discriminator": [
        144,
        90,
        136,
        186,
        161,
        156,
        230,
        142
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newBuyFeeBps",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateDexPoolCreationFee",
      "discriminator": [
        237,
        18,
        125,
        213,
        178,
        48,
        171,
        4
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newFeeLamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateEmergencyAllAuthsUpdateAuthority",
      "discriminator": [
        96,
        86,
        235,
        106,
        170,
        228,
        160,
        216
      ],
      "accounts": [
        {
          "name": "auth",
          "writable": true,
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateGlobalStatesPdaAuth",
      "discriminator": [
        95,
        73,
        120,
        90,
        47,
        156,
        222,
        191
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateGovernmentTaxPdaAuth",
      "discriminator": [
        74,
        74,
        244,
        100,
        76,
        207,
        167,
        39
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "docs": [
            "Admin states PDA (Read-only)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive treasury PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateLiquidityMigrationLockDuration",
      "discriminator": [
        97,
        16,
        145,
        65,
        76,
        206,
        1,
        33
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newLockDuration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateMarketingExpensesPdaAuth",
      "discriminator": [
        146,
        159,
        147,
        181,
        225,
        59,
        239,
        31
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "docs": [
            "Admin States PDA (read-only)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "docs": [
            "Marketing Expenses PDA (mutable, signer via seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateNetProfitPdaAuth",
      "discriminator": [
        93,
        168,
        26,
        219,
        87,
        233,
        162,
        149
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePayrollsBonusesPdaAuth",
      "discriminator": [
        27,
        52,
        196,
        129,
        116,
        56,
        223,
        111
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePeriodDurationSeconds",
      "discriminator": [
        112,
        205,
        45,
        13,
        146,
        71,
        252,
        250
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newDurationSec",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updatePlatformExpensesPdaAuth",
      "discriminator": [
        95,
        61,
        185,
        233,
        127,
        67,
        24,
        186
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must match current emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "docs": [
            "Admin States PDA (read-only)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "docs": [
            "Platform Expenses PDA (mutable)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePlatformFeeVaultPdaAuth",
      "discriminator": [
        77,
        110,
        222,
        146,
        121,
        66,
        8,
        3
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePlatformPaymentsPdaAuth",
      "discriminator": [
        27,
        121,
        46,
        169,
        139,
        15,
        5,
        141
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updatePlatformPaymentsPdaShareholdersDefaultDistributionBps",
      "discriminator": [
        100,
        216,
        71,
        232,
        177,
        55,
        151,
        138
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority that controls updates to the shareholder distribution"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newBpsValues",
          "type": {
            "array": [
              "u16",
              6
            ]
          }
        }
      ]
    },
    {
      "name": "updatePoolMigrationAuth",
      "discriminator": [
        157,
        217,
        114,
        78,
        249,
        100,
        172,
        180
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateProgramUpgradePdaAuth",
      "discriminator": [
        163,
        81,
        181,
        244,
        11,
        169,
        65,
        225
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "programUpgradeAuthPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
                  45,
                  117,
                  112,
                  103,
                  114,
                  97,
                  100,
                  101,
                  45,
                  97,
                  117,
                  116,
                  104
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateSalesAutoEndingDuration",
      "discriminator": [
        38,
        82,
        2,
        243,
        102,
        22,
        158,
        217
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newDurationSec",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateTokenCreatorIncentive",
      "discriminator": [
        51,
        128,
        242,
        184,
        33,
        48,
        243,
        235
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "globalStatesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  108,
                  111,
                  98,
                  97,
                  108,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newIncentiveBps",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateTreasuryPdaAuth",
      "discriminator": [
        16,
        161,
        178,
        230,
        113,
        160,
        159,
        55
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Must be emergency_all_auths_update_authority"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newAuth",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "withdraw",
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "buyer",
          "docs": [
            "Buyer (refund recipient)"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "mint",
          "docs": [
            "The token mint being sold"
          ],
          "writable": true
        },
        {
          "name": "bondingCurvePda",
          "docs": [
            "Bonding curve PDA for this token sale states"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "bondingCurveVault",
          "docs": [
            "Bonding curve vault (SOL vault for this bonding curve)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  110,
                  100,
                  105,
                  110,
                  103,
                  45,
                  99,
                  117,
                  114,
                  118,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "buyerAccumulationPda",
          "docs": [
            "Buyer accumulation PDA (must match buyer + bonding curve PDA)",
            "Will be closed after withdrawal to return rent to buyer"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  117,
                  121,
                  101,
                  114,
                  45,
                  97,
                  99,
                  99,
                  117,
                  109,
                  117,
                  108,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "bondingCurvePda"
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "buyerAssociatedTokenAccount",
          "docs": [
            "Buyer’s ATA (tokens will be burned + then closed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromGovernmentTaxPda",
      "discriminator": [
        195,
        246,
        149,
        169,
        233,
        137,
        122,
        221
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Authority executing the withdrawal"
          ],
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "docs": [
            "Government Tax PDA (mutable, signer via seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program for transfer CPI"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromMarketingExpensesPda",
      "discriminator": [
        229,
        214,
        70,
        139,
        190,
        94,
        249,
        127
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "docs": [
            "Marketing Expenses PDA (mutable, signer via seeds)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromNetProfitPda",
      "discriminator": [
        98,
        62,
        92,
        235,
        17,
        99,
        64,
        113
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Authority allowed to approve withdrawals"
          ],
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "netProfitVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromPayrollsBonusesPda",
      "discriminator": [
        62,
        2,
        192,
        124,
        140,
        122,
        92,
        94
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Authority allowed to approve withdrawals"
          ],
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program for SOL transfers"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromPlatformExpensesPda",
      "discriminator": [
        162,
        194,
        148,
        152,
        95,
        21,
        221,
        166
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "docs": [
            "Required to derive platform payments PDA"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "docs": [
            "Platform Expenses PDA (mutable target)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program for transfer CPI"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromPlatformFeeVaultPda",
      "discriminator": [
        149,
        223,
        118,
        194,
        185,
        13,
        221,
        35
      ],
      "accounts": [
        {
          "name": "auth",
          "signer": true
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Clock sysvar for timing"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromPlatformPaymentsPda",
      "discriminator": [
        242,
        88,
        174,
        72,
        226,
        43,
        131,
        137
      ],
      "accounts": [
        {
          "name": "auth",
          "docs": [
            "Authority that approves withdrawals"
          ],
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "docs": [
            "All the possible destinations"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "treasuryVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "netProfitPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "netProfitVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  110,
                  101,
                  116,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  116,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdrawSolFromTreasuryPda",
      "discriminator": [
        194,
        137,
        249,
        164,
        54,
        66,
        108,
        23
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Must match `treasury_pda_auth`"
          ],
          "signer": true
        },
        {
          "name": "platformRegistryPda",
          "docs": [
            "Registry PDA to get PDA names dynamically"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "adminStatesPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  100,
                  109,
                  105,
                  110,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101,
                  115
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVaultPda",
          "docs": [
            "Fee vault PDA (used for platform payments seeds)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformFeeVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  102,
                  101,
                  101,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "platformPaymentsPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVaultPda"
              }
            ]
          }
        },
        {
          "name": "platformPaymentsVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  112,
                  97,
                  121,
                  109,
                  101,
                  110,
                  116,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformFeeVault"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "treasuryVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "governmentTaxPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "governmentTaxVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  111,
                  118,
                  101,
                  114,
                  110,
                  109,
                  101,
                  110,
                  116,
                  45,
                  116,
                  97,
                  120,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "platformExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "platformExpensesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  116,
                  102,
                  111,
                  114,
                  109,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "marketingExpensesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116,
                  105,
                  110,
                  103,
                  45,
                  101,
                  120,
                  112,
                  101,
                  110,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsPda"
              }
            ]
          }
        },
        {
          "name": "payrollsBonusesVault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  114,
                  111,
                  108,
                  108,
                  115,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115,
                  101,
                  115,
                  45,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "platformPaymentsVault"
              }
            ]
          }
        },
        {
          "name": "destination",
          "writable": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program for transfer CPI"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "clock",
          "docs": [
            "Sysvar for current timestamp"
          ],
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "adminStatesPda",
      "discriminator": [
        2,
        153,
        160,
        143,
        136,
        163,
        144,
        243
      ]
    },
    {
      "name": "ammConfig",
      "discriminator": [
        218,
        244,
        33,
        104,
        203,
        203,
        43,
        111
      ]
    },
    {
      "name": "bondingCurvePda",
      "discriminator": [
        58,
        127,
        175,
        240,
        79,
        61,
        1,
        16
      ]
    },
    {
      "name": "buyerAccumulationPda",
      "discriminator": [
        76,
        39,
        237,
        47,
        2,
        15,
        166,
        7
      ]
    },
    {
      "name": "globalStatesPda",
      "discriminator": [
        26,
        114,
        70,
        128,
        94,
        118,
        112,
        214
      ]
    },
    {
      "name": "governmentTaxPda",
      "discriminator": [
        143,
        44,
        171,
        63,
        181,
        109,
        189,
        122
      ]
    },
    {
      "name": "marketingExpensesPda",
      "discriminator": [
        220,
        92,
        112,
        47,
        187,
        92,
        244,
        224
      ]
    },
    {
      "name": "netProfitPda",
      "discriminator": [
        252,
        90,
        129,
        47,
        240,
        94,
        7,
        38
      ]
    },
    {
      "name": "payrollsBonusesPda",
      "discriminator": [
        76,
        8,
        161,
        180,
        166,
        221,
        156,
        25
      ]
    },
    {
      "name": "platformExpensesPda",
      "discriminator": [
        237,
        102,
        28,
        113,
        156,
        95,
        59,
        67
      ]
    },
    {
      "name": "platformFeeVaultPda",
      "discriminator": [
        122,
        232,
        182,
        76,
        249,
        110,
        63,
        62
      ]
    },
    {
      "name": "platformPaymentsPda",
      "discriminator": [
        219,
        238,
        134,
        206,
        140,
        61,
        113,
        133
      ]
    },
    {
      "name": "platformRegistryPda",
      "discriminator": [
        15,
        191,
        186,
        229,
        31,
        175,
        11,
        47
      ]
    },
    {
      "name": "priceUpdateV2",
      "discriminator": [
        34,
        241,
        35,
        99,
        157,
        126,
        244,
        205
      ]
    },
    {
      "name": "programUpgradeAuthPda",
      "discriminator": [
        224,
        170,
        104,
        208,
        127,
        84,
        181,
        79
      ]
    },
    {
      "name": "treasuryPda",
      "discriminator": [
        43,
        81,
        205,
        195,
        179,
        161,
        242,
        125
      ]
    }
  ],
  "events": [
    {
      "name": "adminStatesPdaInitialized",
      "discriminator": [
        183,
        165,
        177,
        161,
        135,
        209,
        230,
        34
      ]
    },
    {
      "name": "adminStatesPdaAuthUpdated",
      "discriminator": [
        2,
        139,
        116,
        230,
        3,
        156,
        87,
        11
      ]
    },
    {
      "name": "adminStatesPdaFieldInitialized",
      "discriminator": [
        115,
        221,
        233,
        178,
        102,
        51,
        228,
        43
      ]
    },
    {
      "name": "automateDexMigrationDisabled",
      "discriminator": [
        185,
        119,
        79,
        13,
        34,
        63,
        254,
        166
      ]
    },
    {
      "name": "automateDexMigrationEnabled",
      "discriminator": [
        86,
        35,
        238,
        200,
        166,
        126,
        180,
        244
      ]
    },
    {
      "name": "bondingCurvePoolCreated",
      "discriminator": [
        186,
        140,
        28,
        152,
        96,
        134,
        59,
        205
      ]
    },
    {
      "name": "bondingCurveSaleExpired",
      "discriminator": [
        221,
        191,
        2,
        47,
        213,
        104,
        84,
        77
      ]
    },
    {
      "name": "bondingCurveSaleFinalized",
      "discriminator": [
        234,
        212,
        43,
        98,
        169,
        59,
        131,
        17
      ]
    },
    {
      "name": "buyCompleted",
      "discriminator": [
        215,
        135,
        249,
        224,
        229,
        103,
        11,
        29
      ]
    },
    {
      "name": "buyFeeUpdated",
      "discriminator": [
        247,
        207,
        171,
        226,
        144,
        49,
        63,
        190
      ]
    },
    {
      "name": "dexPoolCreationFeeUpdated",
      "discriminator": [
        52,
        166,
        103,
        39,
        169,
        110,
        173,
        202
      ]
    },
    {
      "name": "emergencyAllAuthsUpdateAuthorityUpdated",
      "discriminator": [
        192,
        194,
        35,
        47,
        183,
        157,
        56,
        116
      ]
    },
    {
      "name": "employeeAdded",
      "discriminator": [
        33,
        182,
        133,
        249,
        156,
        132,
        180,
        176
      ]
    },
    {
      "name": "employeeRemoved",
      "discriminator": [
        234,
        222,
        199,
        119,
        163,
        250,
        154,
        114
      ]
    },
    {
      "name": "employeeUpdated",
      "discriminator": [
        15,
        12,
        101,
        103,
        9,
        167,
        130,
        169
      ]
    },
    {
      "name": "escrowCompletedFeeUpdated",
      "discriminator": [
        104,
        221,
        14,
        96,
        73,
        26,
        97,
        145
      ]
    },
    {
      "name": "escrowCreationFeeUpdated",
      "discriminator": [
        128,
        4,
        139,
        47,
        73,
        84,
        247,
        238
      ]
    },
    {
      "name": "finalizedSaleCanceledOnEmergency",
      "discriminator": [
        123,
        187,
        17,
        3,
        109,
        217,
        22,
        62
      ]
    },
    {
      "name": "finalizedSaleFundsRecoveryModeDisabled",
      "discriminator": [
        195,
        8,
        166,
        245,
        231,
        245,
        159,
        53
      ]
    },
    {
      "name": "finalizedSaleFundsRecoveryModeEnabled",
      "discriminator": [
        246,
        95,
        219,
        207,
        32,
        244,
        230,
        143
      ]
    },
    {
      "name": "finalizedSaleLiquidityRecovered",
      "discriminator": [
        255,
        173,
        109,
        182,
        231,
        169,
        94,
        39
      ]
    },
    {
      "name": "globalStatesPdaInitialized",
      "discriminator": [
        75,
        189,
        169,
        210,
        160,
        23,
        208,
        132
      ]
    },
    {
      "name": "globalStatesPdaAuthUpdated",
      "discriminator": [
        158,
        236,
        89,
        103,
        175,
        101,
        205,
        223
      ]
    },
    {
      "name": "globalStatesPdaFieldsInitialized",
      "discriminator": [
        148,
        18,
        210,
        136,
        154,
        168,
        120,
        145
      ]
    },
    {
      "name": "governmentTaxBalanceUpdated",
      "discriminator": [
        154,
        23,
        252,
        227,
        81,
        253,
        219,
        244
      ]
    },
    {
      "name": "governmentTaxPdaInitialized",
      "discriminator": [
        29,
        39,
        238,
        93,
        178,
        54,
        95,
        231
      ]
    },
    {
      "name": "governmentTaxPdaAuthUpdated",
      "discriminator": [
        125,
        27,
        201,
        137,
        209,
        230,
        35,
        60
      ]
    },
    {
      "name": "governmentTaxPdaFieldsInitialized",
      "discriminator": [
        93,
        116,
        199,
        10,
        212,
        105,
        162,
        131
      ]
    },
    {
      "name": "governmentTaxPdaWithdrawalApproved",
      "discriminator": [
        82,
        173,
        29,
        221,
        197,
        228,
        83,
        185
      ]
    },
    {
      "name": "governmentTaxPdaWithdrawalExecuted",
      "discriminator": [
        133,
        150,
        201,
        40,
        108,
        192,
        217,
        28
      ]
    },
    {
      "name": "incomeUpdatedFromPlatformPayments",
      "discriminator": [
        121,
        191,
        174,
        3,
        106,
        82,
        92,
        32
      ]
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToExpenses",
      "discriminator": [
        188,
        148,
        120,
        113,
        175,
        198,
        85,
        114
      ]
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToMarketingExpenses",
      "discriminator": [
        62,
        56,
        173,
        68,
        164,
        216,
        220,
        184
      ]
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToPayrollsBonuses",
      "discriminator": [
        201,
        4,
        191,
        70,
        102,
        74,
        184,
        202
      ]
    },
    {
      "name": "incomeUpdatedFromTreasury",
      "discriminator": [
        193,
        222,
        212,
        10,
        37,
        32,
        78,
        135
      ]
    },
    {
      "name": "incomeUpdatedFromTreasuryToExpenses",
      "discriminator": [
        1,
        184,
        152,
        16,
        241,
        13,
        141,
        43
      ]
    },
    {
      "name": "incomeUpdatedFromTreasuryToMarketingExpenses",
      "discriminator": [
        165,
        142,
        183,
        29,
        195,
        108,
        202,
        114
      ]
    },
    {
      "name": "incomeUpdatedFromTreasuryToPayrollsBonuses",
      "discriminator": [
        225,
        95,
        40,
        225,
        197,
        227,
        100,
        156
      ]
    },
    {
      "name": "liquidityMigrated",
      "discriminator": [
        27,
        161,
        105,
        19,
        236,
        128,
        146,
        13
      ]
    },
    {
      "name": "liquidityMigrationLockDurationUpdated",
      "discriminator": [
        87,
        75,
        203,
        19,
        86,
        241,
        167,
        53
      ]
    },
    {
      "name": "marketingExpensesPdaInitialized",
      "discriminator": [
        132,
        254,
        250,
        30,
        85,
        227,
        238,
        116
      ]
    },
    {
      "name": "marketingExpensesPdaAuthUpdated",
      "discriminator": [
        226,
        39,
        161,
        99,
        208,
        85,
        86,
        99
      ]
    },
    {
      "name": "marketingExpensesPdaBalanceUpdated",
      "discriminator": [
        198,
        213,
        254,
        206,
        227,
        159,
        129,
        203
      ]
    },
    {
      "name": "marketingExpensesPdaFieldsInitialized",
      "discriminator": [
        194,
        145,
        157,
        76,
        167,
        50,
        223,
        37
      ]
    },
    {
      "name": "marketingExpensesPdaWithdrawalApproved",
      "discriminator": [
        82,
        187,
        184,
        213,
        18,
        206,
        177,
        136
      ]
    },
    {
      "name": "marketingExpensesPdaWithdrawalExecuted",
      "discriminator": [
        146,
        23,
        49,
        19,
        52,
        7,
        24,
        94
      ]
    },
    {
      "name": "netProfitIncomeUpdateEvent",
      "discriminator": [
        113,
        208,
        247,
        132,
        32,
        223,
        237,
        32
      ]
    },
    {
      "name": "netProfitPdaInitialized",
      "discriminator": [
        238,
        101,
        95,
        170,
        151,
        244,
        100,
        152
      ]
    },
    {
      "name": "netProfitPdaAuthUpdated",
      "discriminator": [
        79,
        95,
        124,
        18,
        115,
        79,
        240,
        93
      ]
    },
    {
      "name": "netProfitPdaBalanceSyncEvent",
      "discriminator": [
        181,
        19,
        185,
        100,
        198,
        253,
        200,
        137
      ]
    },
    {
      "name": "netProfitPdaBatchWithdrawalEvent",
      "discriminator": [
        210,
        85,
        186,
        33,
        252,
        215,
        13,
        69
      ]
    },
    {
      "name": "netProfitPdaFieldsInitialized",
      "discriminator": [
        220,
        207,
        41,
        123,
        15,
        120,
        158,
        5
      ]
    },
    {
      "name": "netProfitPdaStakeholderWithdrawalEvent",
      "discriminator": [
        6,
        228,
        88,
        230,
        159,
        208,
        202,
        123
      ]
    },
    {
      "name": "netProfitPdaWithdrawalExecuted",
      "discriminator": [
        136,
        113,
        181,
        31,
        209,
        50,
        34,
        153
      ]
    },
    {
      "name": "newTokenMintDisabled",
      "discriminator": [
        238,
        201,
        205,
        138,
        160,
        6,
        70,
        16
      ]
    },
    {
      "name": "newTokenMintEnabled",
      "discriminator": [
        196,
        178,
        192,
        205,
        26,
        248,
        119,
        159
      ]
    },
    {
      "name": "payrollOrBonusTransferAnalyticsEvent",
      "discriminator": [
        212,
        116,
        75,
        56,
        98,
        36,
        15,
        239
      ]
    },
    {
      "name": "payrollsBonusesApprovalEvent",
      "discriminator": [
        95,
        47,
        187,
        120,
        197,
        234,
        221,
        65
      ]
    },
    {
      "name": "payrollsBonusesEmployeeWithdrawalEvent",
      "discriminator": [
        196,
        76,
        119,
        124,
        156,
        170,
        152,
        56
      ]
    },
    {
      "name": "payrollsBonusesPdaInitialized",
      "discriminator": [
        254,
        147,
        42,
        92,
        98,
        120,
        178,
        154
      ]
    },
    {
      "name": "payrollsBonusesPdaAuthUpdated",
      "discriminator": [
        175,
        208,
        244,
        55,
        79,
        243,
        229,
        16
      ]
    },
    {
      "name": "payrollsBonusesPdaBalanceSyncEvent",
      "discriminator": [
        218,
        193,
        166,
        9,
        28,
        14,
        251,
        86
      ]
    },
    {
      "name": "payrollsBonusesPdaBalanceUpdated",
      "discriminator": [
        243,
        197,
        24,
        53,
        96,
        212,
        159,
        35
      ]
    },
    {
      "name": "payrollsBonusesPdaBatchWithdrawalEvent",
      "discriminator": [
        67,
        114,
        229,
        136,
        232,
        131,
        199,
        201
      ]
    },
    {
      "name": "payrollsBonusesPdaFieldsInitialized",
      "discriminator": [
        148,
        1,
        2,
        191,
        199,
        77,
        245,
        184
      ]
    },
    {
      "name": "payrollsBonusesPdaWithdrawalExecuted",
      "discriminator": [
        205,
        114,
        222,
        23,
        197,
        204,
        39,
        23
      ]
    },
    {
      "name": "periodDurationUpdated",
      "discriminator": [
        224,
        22,
        187,
        49,
        130,
        154,
        171,
        251
      ]
    },
    {
      "name": "platformExpensesBalanceUpdated",
      "discriminator": [
        206,
        178,
        167,
        194,
        148,
        138,
        32,
        211
      ]
    },
    {
      "name": "platformExpensesPdaInitialized",
      "discriminator": [
        155,
        4,
        229,
        192,
        175,
        204,
        7,
        243
      ]
    },
    {
      "name": "platformExpensesPdaAuthUpdated",
      "discriminator": [
        235,
        251,
        104,
        253,
        139,
        252,
        239,
        135
      ]
    },
    {
      "name": "platformExpensesPdaFieldsInitialized",
      "discriminator": [
        12,
        189,
        206,
        184,
        207,
        221,
        66,
        155
      ]
    },
    {
      "name": "platformExpensesPdaWithdrawalApproved",
      "discriminator": [
        191,
        223,
        94,
        86,
        195,
        198,
        158,
        108
      ]
    },
    {
      "name": "platformExpensesPdaWithdrawalExecuted",
      "discriminator": [
        30,
        109,
        210,
        241,
        9,
        218,
        237,
        80
      ]
    },
    {
      "name": "platformFeeVaultPdaInitialized",
      "discriminator": [
        138,
        232,
        128,
        18,
        54,
        246,
        213,
        204
      ]
    },
    {
      "name": "platformFeeVaultPdaAuthUpdated",
      "discriminator": [
        179,
        225,
        197,
        80,
        239,
        202,
        223,
        141
      ]
    },
    {
      "name": "platformFeeVaultPdaFieldsInitialized",
      "discriminator": [
        90,
        211,
        38,
        69,
        228,
        214,
        51,
        125
      ]
    },
    {
      "name": "platformFeeVaultPdaWithdrawalExecuted",
      "discriminator": [
        36,
        156,
        133,
        73,
        101,
        12,
        0,
        131
      ]
    },
    {
      "name": "platformInitializationCompleted",
      "discriminator": [
        179,
        215,
        208,
        110,
        236,
        65,
        43,
        93
      ]
    },
    {
      "name": "platformInitializationStarted",
      "discriminator": [
        40,
        35,
        107,
        175,
        41,
        161,
        236,
        124
      ]
    },
    {
      "name": "platformMaintenanceModeDisabled",
      "discriminator": [
        8,
        145,
        188,
        142,
        178,
        174,
        82,
        130
      ]
    },
    {
      "name": "platformMaintenanceModeEnabled",
      "discriminator": [
        17,
        153,
        76,
        166,
        181,
        180,
        33,
        49
      ]
    },
    {
      "name": "platformPaymentsIncomeUpdateEvent",
      "discriminator": [
        45,
        213,
        64,
        40,
        32,
        76,
        60,
        102
      ]
    },
    {
      "name": "platformPaymentsOutcomeToGovernmentTax",
      "discriminator": [
        85,
        164,
        240,
        199,
        198,
        1,
        31,
        194
      ]
    },
    {
      "name": "platformPaymentsOutcomeToMarketingExpenses",
      "discriminator": [
        2,
        249,
        133,
        12,
        250,
        27,
        38,
        136
      ]
    },
    {
      "name": "platformPaymentsOutcomeToNetProfit",
      "discriminator": [
        179,
        58,
        182,
        212,
        203,
        99,
        254,
        8
      ]
    },
    {
      "name": "platformPaymentsOutcomeToPayrollsBonuses",
      "discriminator": [
        202,
        95,
        164,
        63,
        81,
        125,
        54,
        74
      ]
    },
    {
      "name": "platformPaymentsOutcomeToPlatformExpenses",
      "discriminator": [
        251,
        80,
        2,
        192,
        0,
        205,
        153,
        56
      ]
    },
    {
      "name": "platformPaymentsOutcomeToTreasury",
      "discriminator": [
        139,
        247,
        187,
        35,
        162,
        119,
        18,
        13
      ]
    },
    {
      "name": "platformPaymentsPdaInitialized",
      "discriminator": [
        211,
        136,
        243,
        4,
        165,
        183,
        197,
        89
      ]
    },
    {
      "name": "platformPaymentsPdaAuthUpdated",
      "discriminator": [
        73,
        110,
        239,
        248,
        5,
        114,
        178,
        55
      ]
    },
    {
      "name": "platformPaymentsPdaFieldsInitialized",
      "discriminator": [
        111,
        144,
        98,
        133,
        112,
        78,
        241,
        210
      ]
    },
    {
      "name": "platformPaymentsPdaWithdrawalExecuted",
      "discriminator": [
        215,
        202,
        198,
        22,
        175,
        250,
        100,
        152
      ]
    },
    {
      "name": "platformPaymentsShareholderInitialized",
      "discriminator": [
        56,
        248,
        27,
        182,
        239,
        157,
        122,
        198
      ]
    },
    {
      "name": "platformPaymentsShareholdersBpsUpdated",
      "discriminator": [
        139,
        175,
        248,
        109,
        132,
        238,
        105,
        158
      ]
    },
    {
      "name": "platformRegistryEntryInitialized",
      "discriminator": [
        251,
        151,
        62,
        19,
        111,
        62,
        35,
        248
      ]
    },
    {
      "name": "platformRegistryPdaInitialized",
      "discriminator": [
        87,
        185,
        18,
        214,
        108,
        159,
        220,
        89
      ]
    },
    {
      "name": "poolMigrationAuthUpdated",
      "discriminator": [
        182,
        32,
        140,
        187,
        114,
        243,
        85,
        130
      ]
    },
    {
      "name": "programUpgradeAuthPdaInitialized",
      "discriminator": [
        100,
        99,
        155,
        253,
        47,
        139,
        242,
        75
      ]
    },
    {
      "name": "programUpgradePdaAuthUpdated",
      "discriminator": [
        99,
        24,
        38,
        50,
        169,
        229,
        220,
        170
      ]
    },
    {
      "name": "programUpgradePdaFieldsInitialized",
      "discriminator": [
        35,
        33,
        119,
        50,
        191,
        113,
        247,
        64
      ]
    },
    {
      "name": "salesAutoEndingDurationUpdated",
      "discriminator": [
        48,
        138,
        174,
        226,
        161,
        16,
        169,
        230
      ]
    },
    {
      "name": "shareholderListApprovedByAuth",
      "discriminator": [
        37,
        143,
        218,
        44,
        144,
        156,
        168,
        50
      ]
    },
    {
      "name": "stakeholderAdded",
      "discriminator": [
        131,
        241,
        252,
        198,
        159,
        114,
        45,
        3
      ]
    },
    {
      "name": "stakeholderApprovalEvent",
      "discriminator": [
        145,
        123,
        201,
        70,
        142,
        206,
        15,
        113
      ]
    },
    {
      "name": "stakeholderRemoved",
      "discriminator": [
        230,
        183,
        152,
        17,
        121,
        33,
        111,
        172
      ]
    },
    {
      "name": "stakeholderUpdated",
      "discriminator": [
        191,
        187,
        78,
        202,
        32,
        253,
        74,
        104
      ]
    },
    {
      "name": "tokenCreatorIncentiveDisabled",
      "discriminator": [
        120,
        191,
        171,
        116,
        229,
        137,
        57,
        92
      ]
    },
    {
      "name": "tokenCreatorIncentiveEnabled",
      "discriminator": [
        233,
        196,
        118,
        240,
        194,
        194,
        107,
        42
      ]
    },
    {
      "name": "tokenCreatorIncentiveUpdated",
      "discriminator": [
        105,
        228,
        127,
        33,
        200,
        89,
        119,
        79
      ]
    },
    {
      "name": "treasuryIncomeUpdateEvent",
      "discriminator": [
        83,
        104,
        27,
        69,
        150,
        70,
        47,
        77
      ]
    },
    {
      "name": "treasuryOutcomeToGovernmentTax",
      "discriminator": [
        96,
        228,
        95,
        99,
        131,
        42,
        222,
        117
      ]
    },
    {
      "name": "treasuryOutcomeToMarketingExpenses",
      "discriminator": [
        80,
        141,
        198,
        70,
        74,
        152,
        244,
        21
      ]
    },
    {
      "name": "treasuryOutcomeToPayrollsBonuses",
      "discriminator": [
        45,
        131,
        186,
        155,
        216,
        22,
        198,
        173
      ]
    },
    {
      "name": "treasuryOutcomeToPlatformExpenses",
      "discriminator": [
        196,
        168,
        131,
        124,
        18,
        110,
        218,
        73
      ]
    },
    {
      "name": "treasuryPdaInitialized",
      "discriminator": [
        181,
        77,
        42,
        211,
        159,
        23,
        155,
        30
      ]
    },
    {
      "name": "treasuryPdaAuthUpdated",
      "discriminator": [
        205,
        221,
        166,
        134,
        92,
        234,
        133,
        133
      ]
    },
    {
      "name": "treasuryPdaFieldsInitialized",
      "discriminator": [
        165,
        178,
        17,
        124,
        14,
        200,
        243,
        30
      ]
    },
    {
      "name": "treasuryPdaWithdrawalApproved",
      "discriminator": [
        4,
        204,
        128,
        234,
        84,
        187,
        230,
        24
      ]
    },
    {
      "name": "treasuryPdaWithdrawalExecuted",
      "discriminator": [
        8,
        107,
        92,
        113,
        45,
        250,
        8,
        17
      ]
    },
    {
      "name": "withdrawCompleted",
      "discriminator": [
        180,
        77,
        152,
        99,
        248,
        179,
        163,
        44
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorizedInitializer",
      "msg": "Unauthorized initializer: caller is not the deployer"
    },
    {
      "code": 6001,
      "name": "platformAlreadyInitialized",
      "msg": "Platform already initialized"
    },
    {
      "code": 6002,
      "name": "invalidPlatformRegistryPda",
      "msg": "Expected PlatformRegistryPDA derived seeds are Invalid"
    },
    {
      "code": 6003,
      "name": "prpdaChildInitializationFailed",
      "msg": "Failed to initialize PlatformRegistryPDA"
    },
    {
      "code": 6004,
      "name": "puapdaChildInitializationFailed",
      "msg": "Failed to initialize ProgramUpgradeAuthPDA"
    },
    {
      "code": 6005,
      "name": "aspdaChildInitializationFailed",
      "msg": "Failed to initialize AdminStatesPDA"
    },
    {
      "code": 6006,
      "name": "gspdaChildInitializationFailed",
      "msg": "Failed to initialize GlobalStatesPDA"
    },
    {
      "code": 6007,
      "name": "pfvpdaChildInitializationFailed",
      "msg": "Failed to initialize PlatformFeeVaultPDA"
    },
    {
      "code": 6008,
      "name": "pppdaChildInitializationFailed",
      "msg": "Failed to initialize PlatformPaymentsPDA"
    },
    {
      "code": 6009,
      "name": "tpdaChildInitializationFailed",
      "msg": "Failed to initialize TreasuryPDA"
    },
    {
      "code": 6010,
      "name": "gtpdaChildInitializationFailed",
      "msg": "Failed to initialize GovernmentTaxPDA"
    },
    {
      "code": 6011,
      "name": "pepdaChildInitializationFailed",
      "msg": "Failed to initialize PlatformExpensesPDA"
    },
    {
      "code": 6012,
      "name": "mepdaChildInitializationFailed",
      "msg": "Failed to initialize MarketingExpensesPDA"
    },
    {
      "code": 6013,
      "name": "pbpdaChildInitializationFailed",
      "msg": "Failed to initialize PayrollsBonusesPDA"
    },
    {
      "code": 6014,
      "name": "nppdaChildInitializationFailed",
      "msg": "Failed to initialize NetProfitPDA"
    },
    {
      "code": 6015,
      "name": "invalidProgramUpgradeAuthPda",
      "msg": "Expected ProgramUpgradeAuthPDA derived seeds are Invalid"
    },
    {
      "code": 6016,
      "name": "invalidAdminStatesPda",
      "msg": "Expected AdminStatesPDA derived seeds are Invalid"
    },
    {
      "code": 6017,
      "name": "invalidGlobalStatesPda",
      "msg": "Expected GlobalStatesPDA derived seeds are Invalid"
    },
    {
      "code": 6018,
      "name": "invalidPlatformFeeVaultPda",
      "msg": "Expected PlatformFeeVaultPDA derived seeds are Invalid"
    },
    {
      "code": 6019,
      "name": "invalidPlatformPaymentsPda",
      "msg": "Expected PlatformPaymentsPDA derived seeds are Invalid"
    },
    {
      "code": 6020,
      "name": "invalidTreasuryPda",
      "msg": "Expected TreasuryPDA derived seeds are Invalid"
    },
    {
      "code": 6021,
      "name": "invalidGovernmentTaxPda",
      "msg": "Expected GovernmentTaxPDA derived seeds are Invalid"
    },
    {
      "code": 6022,
      "name": "invalidPlatformExpensesPda",
      "msg": "Expected PlatformExpensesPDA derived seeds are Invalid"
    },
    {
      "code": 6023,
      "name": "invalidMarketingExpensesPda",
      "msg": "Expected MarketingExpensesPDA derived seeds are Invalid"
    },
    {
      "code": 6024,
      "name": "invalidPayrollsBonusesPda",
      "msg": "Expected PayrollsBonusesPDA derived seeds are Invalid"
    },
    {
      "code": 6025,
      "name": "invalidNetProfitPda",
      "msg": "Expected NetProfitPDA derived seeds are Invalid"
    },
    {
      "code": 6026,
      "name": "platformMaintenanceEnabled",
      "msg": "The platform is currently in maintenance mode. Please try again later."
    },
    {
      "code": 6027,
      "name": "unauthorized",
      "msg": "Unauthorized: Caller is not allowed to perform this action"
    },
    {
      "code": 6028,
      "name": "zeropubkeyAuth",
      "msg": "Invalid public key: Cannot be zero or malformed"
    },
    {
      "code": 6029,
      "name": "alreadyInUseAuth",
      "msg": "New authority is the same as the current authority"
    },
    {
      "code": 6030,
      "name": "platformMaintenanceAlreadyEnabled",
      "msg": "Platform maintenance mode is already enabled."
    },
    {
      "code": 6031,
      "name": "platformMaintenanceAlreadyDisabled",
      "msg": "Platform maintenance mode is already disabled."
    },
    {
      "code": 6032,
      "name": "invalidHardcodedAuthsUpdateAuthorityAuth",
      "msg": "Invalid hardcoded EMERGENCY_ALL_AUTHS_UPDATE_AUTHORITY_AUTH pubkey"
    },
    {
      "code": 6033,
      "name": "invalidDuration",
      "msg": "Invalid duration: must be > 0 and <= 60 seconds "
    },
    {
      "code": 6034,
      "name": "invalidBuyFeeRange",
      "msg": "Invalid buy fee: must be between 50 and 100 bps"
    },
    {
      "code": 6035,
      "name": "invalidEscrowCreationFee",
      "msg": "Invalid escrow creation fee: Must be >= 0 and <= 1000 usd e2 (10 usd)"
    },
    {
      "code": 6036,
      "name": "invalidEscrowCompletedFeeRange",
      "msg": "Invalid escrow completed fee: Must be between 200 and 300 bps"
    },
    {
      "code": 6037,
      "name": "invalidDexPoolFee",
      "msg": "Invalid DEX pool creation fee: Must be greater than 0 lamports"
    },
    {
      "code": 6038,
      "name": "invalidIncentiveAmount",
      "msg": "Invalid incentive amount: Must be > 0 and <= 100 basis points (1%)"
    },
    {
      "code": 6039,
      "name": "invalidSaleDuration",
      "msg": "Invalid duration: Must be between 43,200 and 172,800 seconds"
    },
    {
      "code": 6040,
      "name": "invalidFeeVaultDuration",
      "msg": "Invalid fee vault duration: must be greater than 5 days (432,000 seconds)"
    },
    {
      "code": 6041,
      "name": "periodNotEnded",
      "msg": "The lock period has not ended yet"
    },
    {
      "code": 6042,
      "name": "insufficientBalance",
      "msg": "Insufficient balance to withdraw"
    },
    {
      "code": 6043,
      "name": "invalidPlatformFeeVault",
      "msg": "Expected PlatformFeeVault derived seeds are Invalid"
    },
    {
      "code": 6044,
      "name": "invalidBpsValue",
      "msg": "The percentage amount is invalid (must be greater than 0)"
    },
    {
      "code": 6045,
      "name": "invalidShareholderCount",
      "msg": "Mismatch in number of shareholders: Expected 6"
    },
    {
      "code": 6046,
      "name": "invalidBpsTotal",
      "msg": "Invalid BPS total: Must sum to 100%"
    },
    {
      "code": 6047,
      "name": "netProfitPdaMissing",
      "msg": "NetProfitPDA is missing from shareholder list."
    },
    {
      "code": 6048,
      "name": "shareholderListNotApproved",
      "msg": "The shareholder list has not been approved by the authorized signer."
    },
    {
      "code": 6049,
      "name": "invalidWithdrawAmount",
      "msg": "The withdrawal amount is invalid (must be greater than 0)."
    },
    {
      "code": 6050,
      "name": "invalidDestination",
      "msg": "The wallet does not match any approved destination."
    },
    {
      "code": 6051,
      "name": "invalidPlatformPaymentsVault",
      "msg": "Expected PlatformPaymentsVault derived seeds are Invalid."
    },
    {
      "code": 6052,
      "name": "tPdaSelfDestination",
      "msg": "TreasuryVault cannot be set as its own withdrawal destination."
    },
    {
      "code": 6053,
      "name": "notApprovedByAuth",
      "msg": "Withdrawal request not approved by treasury auth."
    },
    {
      "code": 6054,
      "name": "invalidTreasuryVault",
      "msg": "Expected TreasuryVault derived seeds are Invalid"
    },
    {
      "code": 6055,
      "name": "gtPdaSelfDestination",
      "msg": "GovernmentTaxVault cannot be set as its own withdrawal destination."
    },
    {
      "code": 6056,
      "name": "invalidGovernmentTaxVault",
      "msg": "Expected GovernmentTaxVault derived seeds are Invalid"
    },
    {
      "code": 6057,
      "name": "pePdaSelfDestination",
      "msg": "PlatformExpensesVault cannot be set as its own withdrawal destination."
    },
    {
      "code": 6058,
      "name": "invalidPlatformExpensesVault",
      "msg": "Expected PlatformExpensesVault derived seeds are Invalid"
    },
    {
      "code": 6059,
      "name": "mePdaSelfDestination",
      "msg": "MarketingExpensesVault cannot be set as its own withdrawal destination."
    },
    {
      "code": 6060,
      "name": "duplicateRecipientWallet",
      "msg": "Duplicate recipient wallet address detected."
    },
    {
      "code": 6061,
      "name": "emptyMeRecipientsList",
      "msg": "MarketingExpensesPDA Recipient list is empty."
    },
    {
      "code": 6062,
      "name": "maxTxBatchSizeExceeded",
      "msg": "Maximum transaction batch size exceeded."
    },
    {
      "code": 6063,
      "name": "recipientsKeyLengthMismatchedInTx",
      "msg": "Recipient list length mismatched with accounts passed in tx."
    },
    {
      "code": 6064,
      "name": "recipientAccountInfoMissingInTx",
      "msg": "Recipient account info passing is missing in tx from off-chain."
    },
    {
      "code": 6065,
      "name": "invalidMarketingExpensesVault",
      "msg": "Expected MarketingExpensesVault derived seeds are Invalid"
    },
    {
      "code": 6066,
      "name": "maxEmployeesReached",
      "msg": "Maximum number of employees reached"
    },
    {
      "code": 6067,
      "name": "pbPdaSelfDestination",
      "msg": "PayrollsBonusesPDA cannot be set as its own withdrawal destination."
    },
    {
      "code": 6068,
      "name": "invalidEmployeeName",
      "msg": "Invalid employee name"
    },
    {
      "code": 6069,
      "name": "invalidEmployeeNameLength",
      "msg": "Employee name too long"
    },
    {
      "code": 6070,
      "name": "invalidJobTitle",
      "msg": "Invalid job title"
    },
    {
      "code": 6071,
      "name": "invalidJobTitleLength",
      "msg": "Job title too long"
    },
    {
      "code": 6072,
      "name": "duplicateEmployeeWallet",
      "msg": "Duplicate employee wallet not allowed"
    },
    {
      "code": 6073,
      "name": "duplicateEmployeeName",
      "msg": "Duplicate employee name not allowed"
    },
    {
      "code": 6074,
      "name": "employeeNotFound",
      "msg": "Employee not found"
    },
    {
      "code": 6075,
      "name": "mismatchedEmployeesVectorLength",
      "msg": "Employees vector length mismatch"
    },
    {
      "code": 6076,
      "name": "mismatchedEmployeesPassedAmountsVectorLength",
      "msg": "Passed SOL amounts vector length mismatch"
    },
    {
      "code": 6077,
      "name": "invalidBatchType",
      "msg": "Invalid batch type: must be Payroll or Bonus"
    },
    {
      "code": 6078,
      "name": "tickedEmployeeMissingSolAmount",
      "msg": "Missing SOL amount of selected employee"
    },
    {
      "code": 6079,
      "name": "tickedEmployeesIndicesVectorLengthIsEmpty",
      "msg": "No employees indices selected for withdrawal tx batching."
    },
    {
      "code": 6080,
      "name": "noMoreTxBatches",
      "msg": "No more transaction batches left to process."
    },
    {
      "code": 6081,
      "name": "employeeAccountInfoMissingInTx",
      "msg": "Employee account info passing is missing in tx from off-chain."
    },
    {
      "code": 6082,
      "name": "destinationNotWritable",
      "msg": "Destination account is not writable."
    },
    {
      "code": 6083,
      "name": "maxStakeholdersReached",
      "msg": "Maximum number of stakeholders reached."
    },
    {
      "code": 6084,
      "name": "invalidStakeholderName",
      "msg": "Invalid stakeholder name."
    },
    {
      "code": 6085,
      "name": "invalidStakeholderNameLength",
      "msg": "Stakeholder name length exceeds maximum allowed."
    },
    {
      "code": 6086,
      "name": "duplicateStakeholderWallet",
      "msg": "Duplicate stakeholder wallet."
    },
    {
      "code": 6087,
      "name": "duplicateStakeholderName",
      "msg": "Duplicate stakeholder name."
    },
    {
      "code": 6088,
      "name": "stakeholderNotFound",
      "msg": "Stakeholder not found."
    },
    {
      "code": 6089,
      "name": "presidentNotFound",
      "msg": "President stakeholder not found."
    },
    {
      "code": 6090,
      "name": "cannotRemovePresident",
      "msg": "Cannot remove president."
    },
    {
      "code": 6091,
      "name": "invalidBps",
      "msg": "Invalid BPS value."
    },
    {
      "code": 6092,
      "name": "insufficientPresidentBps",
      "msg": "Insufficient BPS in president to add BPS to new or existing stakeholder."
    },
    {
      "code": 6093,
      "name": "cannotDirectlyUpdatePresidentBps",
      "msg": "Cannot directly update president BPS."
    },
    {
      "code": 6094,
      "name": "mismatchedStakeholdersPassedAmountsVectorLength",
      "msg": "Length of ticked/unticked status vector does not match the number of stakeholders."
    },
    {
      "code": 6095,
      "name": "tickedStakeholdersIndicesVectorLengthIsEmpty",
      "msg": "No stakeholders indices selected for withdrawal tx batching."
    },
    {
      "code": 6096,
      "name": "stakeholderAccountInfoMissingInTx",
      "msg": "stakeholder account info passing is missing in tx from off-chain."
    },
    {
      "code": 6097,
      "name": "tokenNameTooLong",
      "msg": "Token name exceeds maximum length"
    },
    {
      "code": 6098,
      "name": "tokenSymbolTooLong",
      "msg": "Token symbol exceeds maximum length"
    },
    {
      "code": 6099,
      "name": "metadataUriTooLong",
      "msg": "Metadata URI exceeds maximum length"
    },
    {
      "code": 6100,
      "name": "bcPdaAccountAlreadyInitialized",
      "msg": "BondingCurvePDA account is already initialized."
    },
    {
      "code": 6101,
      "name": "invalidBondingCurveAta",
      "msg": "Expected BondingCurveATA derived seeds are Invalid."
    },
    {
      "code": 6102,
      "name": "invalidBuyerAccumulationPda",
      "msg": "Expected BuyerAccumulationPDA derived seeds are Invalid."
    },
    {
      "code": 6103,
      "name": "baPdaAccountAlreadyInitialized",
      "msg": "BuyerAccumulationPDA account is already initialized."
    },
    {
      "code": 6104,
      "name": "invalidBuyerAccumulationAta",
      "msg": "Expected BuyerAccumulationATA derived seeds are Invalid."
    },
    {
      "code": 6105,
      "name": "newTokenMintingDisabled",
      "msg": "New token minting is currently disabled globally."
    },
    {
      "code": 6106,
      "name": "invalidMintAuthorityPda",
      "msg": "Expected MintAuthorityPDA derived seeds are Invalid"
    },
    {
      "code": 6107,
      "name": "invalidMetadataPda",
      "msg": "Expected MetadataPDA derived seeds are Invalid"
    },
    {
      "code": 6108,
      "name": "integerOverflow",
      "msg": "Integer overflow occurred during computation."
    },
    {
      "code": 6109,
      "name": "saleNotActive",
      "msg": "The token sale is not active."
    },
    {
      "code": 6110,
      "name": "saleFinalized",
      "msg": "The token sale has already been finalized."
    },
    {
      "code": 6111,
      "name": "invalidBuyAmount",
      "msg": "The buy amount is invalid (must be greater than 0)."
    },
    {
      "code": 6112,
      "name": "insufficientWalletBalance",
      "msg": "Insufficient wallet SOL balance to complete the purchase."
    },
    {
      "code": 6113,
      "name": "invalidPriceFeed",
      "msg": "Invalid SOL/USD price feed data from Pyth oracle."
    },
    {
      "code": 6114,
      "name": "saleCapHasExceeded",
      "msg": "The sale max cap has exceeded — cannot accept more investments."
    },
    {
      "code": 6115,
      "name": "buyAmountTooSmall",
      "msg": "The buy amount is below the minimum investment amount."
    },
    {
      "code": 6116,
      "name": "zeroBuyTokenAmount",
      "msg": "buying token amount cannot be 0."
    },
    {
      "code": 6117,
      "name": "insufficientTokenBalance",
      "msg": "Bonding curve ATA has insufficient token balance for this purchase."
    },
    {
      "code": 6118,
      "name": "invalidBondingCurveVault",
      "msg": "Expected BondingCurveVault derived seeds are Invalid"
    },
    {
      "code": 6119,
      "name": "finalizedSaleAlreadyCanceled",
      "msg": "Action denied: the finalized sale has already been canceled by the platform authority."
    },
    {
      "code": 6120,
      "name": "slippageExceeded",
      "msg": "Slippage tolerance exceeded."
    },
    {
      "code": 6121,
      "name": "unverifiedPythPriceFeed",
      "msg": "Unverified Pyth price feed account — data not signed by trusted Pyth guardian."
    },
    {
      "code": 6122,
      "name": "invalidSolusdFeedId",
      "msg": "Invalid SOL/USD feed ID — cannot decode from hex."
    },
    {
      "code": 6123,
      "name": "outdatedPriceFeed",
      "msg": "The SOL/USD price feed data from the oracle is outdated."
    },
    {
      "code": 6124,
      "name": "unreliablePriceFeed",
      "msg": "Price feed confidence interval is not reliable."
    },
    {
      "code": 6125,
      "name": "saleStillActive",
      "msg": "The token sale is still active"
    },
    {
      "code": 6126,
      "name": "finalizedSaleNotCanceled",
      "msg": "Action denied: the finalized sale has not been canceled by the platform authority."
    },
    {
      "code": 6127,
      "name": "saleNotExpired",
      "msg": "The token sale is not expired yet."
    },
    {
      "code": 6128,
      "name": "nothingToWithdraw",
      "msg": "No more SOL to withdraw."
    },
    {
      "code": 6129,
      "name": "missingBuyerSignature",
      "msg": "The buyer signature is missing."
    },
    {
      "code": 6130,
      "name": "reentrancyAttempt",
      "msg": "Reentrancy attempt detected during liquidity migration."
    },
    {
      "code": 6131,
      "name": "automatedDexMigrationDisabled",
      "msg": "Automated DEX liquidity migration is currently disabled."
    },
    {
      "code": 6132,
      "name": "saleNotFinalized",
      "msg": "The token sale is not finalized yet."
    },
    {
      "code": 6133,
      "name": "liquidityMigrationLocked",
      "msg": "Liquidity migration is locked until the lock duration has passed."
    },
    {
      "code": 6134,
      "name": "recoveryModeEnabled",
      "msg": "Funds recovery mode is enabled; liquidity migration is not allowed."
    },
    {
      "code": 6135,
      "name": "liquidityMigrationFinalized",
      "msg": "Liquidity migration already finalized."
    },
    {
      "code": 6136,
      "name": "invalidRaydiumProgram",
      "msg": "Invalid Raydium CPMM Program ID detected."
    },
    {
      "code": 6137,
      "name": "invalidCreatorWsolAta",
      "msg": "Invalid bonding curve vault WSOL ATA account is detected."
    },
    {
      "code": 6138,
      "name": "invalidCreatorTokenAta",
      "msg": "Invalid bonding curve vault Token ATA account is detected."
    },
    {
      "code": 6139,
      "name": "invalidCreatorLpTokenAta",
      "msg": "Invalid bonding curve vault LP Token ATA account is detected."
    },
    {
      "code": 6140,
      "name": "missingIncentiveWallet",
      "msg": "Missing token creator incentive receiver wallet."
    },
    {
      "code": 6141,
      "name": "invalidIncentiveWallet",
      "msg": "Invalid token creator incentive receiver wallet."
    },
    {
      "code": 6142,
      "name": "finalizedSaleLiquiditydAlreadyRecovered",
      "msg": "Action denied: liquidity of this finalized sale has already been recovered."
    },
    {
      "code": 6143,
      "name": "recoveryModeNotEnabled",
      "msg": "Funds recovery mode is not enabled for this BondingCurvePDA yet."
    },
    {
      "code": 6144,
      "name": "liquidityMigrationInProgress",
      "msg": "Liquidity migration is in progress; emergency withdraw cannot be enabled."
    },
    {
      "code": 6145,
      "name": "recoveryModeEnabledWoe",
      "msg": "Funds recovery mode is enabled. Disable it before enabling emergency withdraw."
    }
  ],
  "types": [
    {
      "name": "adminStatesPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "emergencyAllAuthsUpdateAuthority",
            "type": "pubkey"
          },
          {
            "name": "poolMigrationAuth",
            "type": "pubkey"
          },
          {
            "name": "isAutomateDexMigrationEnabled",
            "type": "bool"
          },
          {
            "name": "liquidityMigrationLockDuration",
            "type": "i64"
          },
          {
            "name": "isPlatformMaintenanceModeEnabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "adminStatesPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminStatesPda",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "adminStatesPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldAdminStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newAdminStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "adminStatesPdaFieldInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminStatesPda",
            "type": "pubkey"
          },
          {
            "name": "adminStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "emergencyAllAuthsUpdateAuthority",
            "type": "pubkey"
          },
          {
            "name": "poolMigrationAuth",
            "type": "pubkey"
          },
          {
            "name": "isAutomateDexMigrationEnabled",
            "type": "bool"
          },
          {
            "name": "liquidityMigrationLockDuration",
            "type": "i64"
          },
          {
            "name": "isPlatformMaintenanceModeEnabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "ammConfig",
      "docs": [
        "Holds the current owner of the factory"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "disableCreatePool",
            "docs": [
              "Status to control if new pool can be create"
            ],
            "type": "bool"
          },
          {
            "name": "index",
            "docs": [
              "Config index"
            ],
            "type": "u16"
          },
          {
            "name": "tradeFeeRate",
            "docs": [
              "The trade fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeeRate",
            "docs": [
              "The protocol fee"
            ],
            "type": "u64"
          },
          {
            "name": "fundFeeRate",
            "docs": [
              "The fund fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "createPoolFee",
            "docs": [
              "Fee for create a new pool"
            ],
            "type": "u64"
          },
          {
            "name": "protocolOwner",
            "docs": [
              "Address of the protocol fee owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "fundOwner",
            "docs": [
              "Address of the fund fee owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "creatorFeeRate",
            "docs": [
              "The pool creator fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "padding",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u64",
                15
              ]
            }
          }
        ]
      }
    },
    {
      "name": "approveGovernmentTaxWithdrawalRequestByAuth",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "destinationAddress",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          },
          {
            "name": "isApprovedByAuth",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "approvePlatformExpensesWithdrawalRequestByAuth",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "destinationAddress",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          },
          {
            "name": "isApprovedByAuth",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "approveTreasuryWithdrawalRequestByAuth",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "destinationAddress",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          },
          {
            "name": "isApprovedByAuth",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "automateDexMigrationDisabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isAutomateDexMigrationEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "automateDexMigrationEnabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isAutomateDexMigrationEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "bondingCurvePda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenCreator",
            "type": "pubkey"
          },
          {
            "name": "isCreatorEligibleForIncentive",
            "type": "bool"
          },
          {
            "name": "creatorIncentiveBps",
            "type": "u64"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMetadataUri",
            "type": "string"
          },
          {
            "name": "totalSoldTokensE6",
            "type": "u64"
          },
          {
            "name": "totalRaisedUsdE2",
            "type": "u64"
          },
          {
            "name": "lastSolUsdPriceE2",
            "type": "u64"
          },
          {
            "name": "isSaleActive",
            "type": "bool"
          },
          {
            "name": "isSaleFinalized",
            "type": "bool"
          },
          {
            "name": "isSaleExpired",
            "type": "bool"
          },
          {
            "name": "saleCreatedAt",
            "type": "i64"
          },
          {
            "name": "saleExpiresAt",
            "type": "i64"
          },
          {
            "name": "saleFinalizedAt",
            "type": "i64"
          },
          {
            "name": "saleExpiredAt",
            "type": "i64"
          },
          {
            "name": "liquidityMigratedAt",
            "type": "i64"
          },
          {
            "name": "isLiquidityMigrationInProgress",
            "type": "bool"
          },
          {
            "name": "isLiquidityMigrated",
            "type": "bool"
          },
          {
            "name": "liquidityPoolAddress",
            "type": "pubkey"
          },
          {
            "name": "isFinalizedSaleFundsRecoveryModeEnabled",
            "type": "bool"
          },
          {
            "name": "isFinalizedSaleLiquidityRecovered",
            "type": "bool"
          },
          {
            "name": "finalizedSaleLiquidityRecoveredAt",
            "type": "i64"
          },
          {
            "name": "isFinalizedSaleCanceled",
            "type": "bool"
          },
          {
            "name": "finalizedSaleCanceledAt",
            "type": "i64"
          },
          {
            "name": "totalRaisedLamports",
            "type": "u64"
          },
          {
            "name": "totalBuyCount",
            "type": "u64"
          },
          {
            "name": "addedLiquidityInLamports",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCreationFeeInLamports",
            "type": "u64"
          },
          {
            "name": "totalCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "countOfCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCompletedFeeInLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bondingCurvePoolCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMetadataUri",
            "type": "string"
          },
          {
            "name": "saleCreatedAt",
            "type": "i64"
          },
          {
            "name": "isSaleActive",
            "type": "bool"
          },
          {
            "name": "saleExpiresAt",
            "type": "i64"
          },
          {
            "name": "escrowCreationFeeInLamports",
            "type": "u64"
          },
          {
            "name": "isCreatorEligibleForIncentive",
            "type": "bool"
          },
          {
            "name": "creatorIncentiveBps",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bondingCurveSaleExpired",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "totalSoldTokensE6",
            "type": "u64"
          },
          {
            "name": "totalRaisedUsdE2",
            "type": "u64"
          },
          {
            "name": "totalCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "countOfCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "totalWithdrawableVolumeInLamports",
            "type": "u64"
          },
          {
            "name": "isSaleExpired",
            "type": "bool"
          },
          {
            "name": "saleExpiredAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bondingCurveSaleFinalized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "totalSoldTokensE6",
            "type": "u64"
          },
          {
            "name": "totalRaisedUsdE2",
            "type": "u64"
          },
          {
            "name": "totalCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "countOfCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "totalRaisedLamports",
            "type": "u64"
          },
          {
            "name": "totalBuyCount",
            "type": "u64"
          },
          {
            "name": "saleFinalizedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "buyCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenBuyerAddress",
            "type": "pubkey"
          },
          {
            "name": "buyAmountInLamports",
            "type": "u64"
          },
          {
            "name": "buyAmountInUsdE2",
            "type": "u64"
          },
          {
            "name": "buyAmountInTokensE6",
            "type": "u64"
          },
          {
            "name": "buyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "lastSolUsdPriceE2",
            "type": "u64"
          },
          {
            "name": "totalSoldTokensE6",
            "type": "u64"
          },
          {
            "name": "totalRaisedLamports",
            "type": "u64"
          },
          {
            "name": "totalRaisedUsdE2",
            "type": "u64"
          },
          {
            "name": "totalBuyCount",
            "type": "u64"
          },
          {
            "name": "saleFinalizedAt",
            "type": "i64"
          },
          {
            "name": "isSaleActive",
            "type": "bool"
          },
          {
            "name": "isSaleFinalized",
            "type": "bool"
          },
          {
            "name": "isSaleExpired",
            "type": "bool"
          },
          {
            "name": "buyCompletedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "buyFeeUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldBuyFee",
            "type": "u64"
          },
          {
            "name": "newBuyFee",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "buyerAccumulationPda",
      "docs": [
        "PDA account that tracks how much each buyer has contributed and received"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsContributed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "dexPoolCreationFeeUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldDexPoolCreationFee",
            "type": "u64"
          },
          {
            "name": "newDexPoolCreationFee",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "emergencyAllAuthsUpdateAuthorityUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldEmergencyAllAuthsUpdateAuthority",
            "type": "pubkey"
          },
          {
            "name": "newEmergencyAllAuthsUpdateAuthority",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "employeeAdded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "jobTitle",
            "type": "string"
          },
          {
            "name": "totalEmployees",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "employeeRemoved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "totalEmployees",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "employeeUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "newWallet",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "newName",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "newJobTitle",
            "type": {
              "option": "string"
            }
          }
        ]
      }
    },
    {
      "name": "employeesAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "add",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              },
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "jobTitle",
                "type": "string"
              }
            ]
          },
          {
            "name": "update",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              },
              {
                "name": "newWallet",
                "type": {
                  "option": "pubkey"
                }
              },
              {
                "name": "newName",
                "type": {
                  "option": "string"
                }
              },
              {
                "name": "newJobTitle",
                "type": {
                  "option": "string"
                }
              }
            ]
          },
          {
            "name": "remove",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "escrowCompletedFeeUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldBondingcurveEscrowCompletedFee",
            "type": "u64"
          },
          {
            "name": "newBondingcurveEscrowCompletedFee",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "escrowCreationFeeUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldBondingcurveEscrowCreationFeeUsdE2",
            "type": "u64"
          },
          {
            "name": "newBondingcurveEscrowCreationFeeUsdE2",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "finalizedSaleCanceledOnEmergency",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "isSaleFinalized",
            "type": "bool"
          },
          {
            "name": "isFinalizedSaleCanceled",
            "type": "bool"
          },
          {
            "name": "finalizedSaleCanceledAt",
            "type": "i64"
          },
          {
            "name": "totalSoldTokensE6",
            "type": "u64"
          },
          {
            "name": "totalRaisedUsdE2",
            "type": "u64"
          },
          {
            "name": "totalCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "countOfCollectedBuyFeeInLamports",
            "type": "u64"
          },
          {
            "name": "totalWithdrawableVolumeInLamports",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "finalizedSaleFundsRecoveryModeDisabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "isFinalizedSaleFundsRecoveryModeEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "finalizedSaleFundsRecoveryModeEnabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "isFinalizedSaleFundsRecoveryModeEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "finalizedSaleLiquidityRecovered",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "totalRecoveredLamports",
            "type": "u64"
          },
          {
            "name": "recoveredLiquidityInLamports",
            "type": "u64"
          },
          {
            "name": "recoveredLiquidityInTokens",
            "type": "u64"
          },
          {
            "name": "isFinalizedSaleLiquidityRecovered",
            "type": "bool"
          },
          {
            "name": "finalizedSaleLiquidityRecoveredAt",
            "type": "i64"
          },
          {
            "name": "escrowCompletedFeeInLamports",
            "type": "u64"
          },
          {
            "name": "isCreatorEligibleForIncentive",
            "type": "bool"
          },
          {
            "name": "creatorIncentiveLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "globalStatesPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "globalStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCreationFeeUsdE2",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCompletedFeeBps",
            "type": "u64"
          },
          {
            "name": "dexPoolCreationFeeLamports",
            "type": "u64"
          },
          {
            "name": "isTokenCreatorIncentiveEnabled",
            "type": "bool"
          },
          {
            "name": "tokenCreatorIncentiveBps",
            "type": "u64"
          },
          {
            "name": "minBuyAmountInUsdE2",
            "type": "u64"
          },
          {
            "name": "maxUsdRaiseCapInUsdE2",
            "type": "u64"
          },
          {
            "name": "isNewTokenMintEnabled",
            "type": "bool"
          },
          {
            "name": "salesAutoEndingDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "globalStatesPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "globalStatesPda",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "globalStatesPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldGlobalStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newGlobalStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "globalStatesPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "globalStatesPda",
            "type": "pubkey"
          },
          {
            "name": "globalStatesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "buyFeeBps",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCreationFeeUsdE2",
            "type": "u64"
          },
          {
            "name": "bondingcurveEscrowCompletedFeeBps",
            "type": "u64"
          },
          {
            "name": "dexPoolCreationFeeLamports",
            "type": "u64"
          },
          {
            "name": "isTokenCreatorIncentiveEnabled",
            "type": "bool"
          },
          {
            "name": "tokenCreatorIncentiveBps",
            "type": "u64"
          },
          {
            "name": "minBuyAmountInUsdE2",
            "type": "u64"
          },
          {
            "name": "maxUsdRaiseCapInUsdE2",
            "type": "u64"
          },
          {
            "name": "isNewTokenMintEnabled",
            "type": "bool"
          },
          {
            "name": "salesAutoEndingDuration",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "governmentTaxBalanceUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamports",
            "type": "u64"
          },
          {
            "name": "countOfIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "governmentTaxPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "approveGovernmentTaxWithdrawalRequestByAuth",
            "type": {
              "defined": {
                "name": "approveGovernmentTaxWithdrawalRequestByAuth"
              }
            }
          },
          {
            "name": "currentTotalLamportsBalanceOfGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsFromPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsFromPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountFromPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsReceivedFromTreasuryPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsReceivedFromTreasuryPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsReceivedFromTreasuryPdaToGovernmentTaxPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "governmentTaxPda",
            "type": "pubkey"
          },
          {
            "name": "governmentTaxVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldGovernmentTaxPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newGovernmentTaxPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "governmentTaxPda",
            "type": "pubkey"
          },
          {
            "name": "governmentTaxPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "governmentTaxVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPdaWithdrawalApproved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "approver",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "governmentTaxPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "receiver",
            "type": "pubkey"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromPlatformPayments",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToGovernmentTax",
            "type": "u64"
          },
          {
            "name": "lastLamportsToGovernmentTax",
            "type": "u64"
          },
          {
            "name": "countLamportsToGovernmentTax",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToPlatformExpenses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToPlatformExpenses",
            "type": "u64"
          },
          {
            "name": "countLamportsToPlatformExpenses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToMarketingExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToMarketingExpenses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToMarketingExpenses",
            "type": "u64"
          },
          {
            "name": "countLamportsToMarketingExpenses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromPlatformPaymentsToPayrollsBonuses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToPayrollsBonuses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToPayrollsBonuses",
            "type": "u64"
          },
          {
            "name": "countLamportsToPayrollsBonuses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromTreasury",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToGovernmentTax",
            "type": "u64"
          },
          {
            "name": "lastLamportsToGovernmentTax",
            "type": "u64"
          },
          {
            "name": "countLamportsToGovernmentTax",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromTreasuryToExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToPlatformExpenses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToPlatformExpenses",
            "type": "u64"
          },
          {
            "name": "countLamportsToPlatformExpenses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromTreasuryToMarketingExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToMarketingExpenses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToMarketingExpenses",
            "type": "u64"
          },
          {
            "name": "countLamportsToMarketingExpenses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "incomeUpdatedFromTreasuryToPayrollsBonuses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsToPayrollsBonuses",
            "type": "u64"
          },
          {
            "name": "lastLamportsToPayrollsBonuses",
            "type": "u64"
          },
          {
            "name": "countLamportsToPayrollsBonuses",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidityMigrated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenCreatorAddress",
            "type": "pubkey"
          },
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "bondingCurvePoolAddress",
            "type": "pubkey"
          },
          {
            "name": "liquidityPoolAddress",
            "type": "pubkey"
          },
          {
            "name": "addedLiquidityInLamports",
            "type": "u64"
          },
          {
            "name": "addedLiquidityInTokens",
            "type": "u64"
          },
          {
            "name": "isLiquidityMigrated",
            "type": "bool"
          },
          {
            "name": "liquidityMigratedAt",
            "type": "i64"
          },
          {
            "name": "escrowCompletedFeeInLamports",
            "type": "u64"
          },
          {
            "name": "restDexPoolCreationFeeLamports",
            "type": "u64"
          },
          {
            "name": "isCreatorEligibleForIncentive",
            "type": "bool"
          },
          {
            "name": "creatorIncentiveLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidityMigrationLockDurationUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldLiquidityMigrationLockDuration",
            "type": "i64"
          },
          {
            "name": "newLiquidityMigrationLockDuration",
            "type": "i64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketingExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "marketingExpensesPdaRecipients",
            "type": {
              "vec": {
                "defined": {
                  "name": "marketingExpensesPdaRecipient"
                }
              }
            }
          },
          {
            "name": "isRecipientListApprovedByAuth",
            "type": "bool"
          },
          {
            "name": "currentTotalLamportsBalanceOfMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsFromPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsFromPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountFromPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsReceivedFromTreasuryPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsReceivedFromTreasuryPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsReceivedFromTreasuryPdaToMarketingExpensesPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketingExpensesPda",
            "type": "pubkey"
          },
          {
            "name": "marketingExpensesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldMarketingExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newMarketingExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaBalanceUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamports",
            "type": "u64"
          },
          {
            "name": "countOfIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketingExpensesPda",
            "type": "pubkey"
          },
          {
            "name": "marketingExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "marketingExpensesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaRecipient",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "destinationAddress",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaWithdrawalApproved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "approver",
            "type": "pubkey"
          },
          {
            "name": "recipients",
            "type": {
              "vec": {
                "defined": {
                  "name": "marketingExpensesPdaRecipient"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "marketingExpensesPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnTotalLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "recipients",
            "type": {
              "vec": {
                "defined": {
                  "name": "marketingExpensesPdaRecipient"
                }
              }
            }
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "netProfitIncomeUpdateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamportsToNetProfit",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToNetProfit",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountToNetProfit",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "netProfitPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "netProfitPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "netProfitStakeholders",
            "type": {
              "vec": {
                "defined": {
                  "name": "stakeholder"
                }
              }
            }
          },
          {
            "name": "isStakeholderListApprovedByAuth",
            "type": "bool"
          },
          {
            "name": "currentTxBatchIndex",
            "type": "u64"
          },
          {
            "name": "isWithdrawalRoundActive",
            "type": "bool"
          },
          {
            "name": "totalStakeholders",
            "type": "u64"
          },
          {
            "name": "currentTotalLamportsBalanceOfNetProfitPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToNetProfitPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromNetProfitPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToNetProfitPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromNetProfitPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfNetProfitPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfNetProfitPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "netProfitPda",
            "type": "pubkey"
          },
          {
            "name": "netProfitVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldNetProfitPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newNetProfitPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaBalanceSyncEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaBatchWithdrawalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "batchTotalLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "netProfitPda",
            "type": "pubkey"
          },
          {
            "name": "netProfitPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "netProfitVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaStakeholderWithdrawalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "receiverStakeholderWallet",
            "type": "pubkey"
          },
          {
            "name": "stakeholderName",
            "type": "string"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "netProfitPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "totalBatchWithdrawnLamports",
            "type": "u64"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "newShareholderEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholderPdaWallet",
            "type": "pubkey"
          },
          {
            "name": "shareholderName",
            "type": "string"
          },
          {
            "name": "usedBps",
            "type": "u64"
          },
          {
            "name": "amountInLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "newTokenMintDisabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isNewTokenMintEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "newTokenMintEnabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isNewTokenMintEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "paymentBatchType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "payroll"
          },
          {
            "name": "bonus"
          }
        ]
      }
    },
    {
      "name": "payrollOrBonusTransferAnalyticsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "batchType",
            "type": {
              "defined": {
                "name": "paymentBatchType"
              }
            }
          },
          {
            "name": "totalLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "totalLastLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "transferredLamportsCount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesApprovalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "employeeWallet",
            "type": "pubkey"
          },
          {
            "name": "employeeName",
            "type": "string"
          },
          {
            "name": "employeeJobTitle",
            "type": "string"
          },
          {
            "name": "isSelected",
            "type": "bool"
          },
          {
            "name": "approvedAmount",
            "type": "u64"
          },
          {
            "name": "batchType",
            "type": {
              "defined": {
                "name": "paymentBatchType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesEmployee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "employeeWallet",
            "type": "pubkey"
          },
          {
            "name": "employeeJobTitle",
            "type": "string"
          },
          {
            "name": "employeeName",
            "type": "string"
          },
          {
            "name": "isEmployeeSelected",
            "type": "bool"
          },
          {
            "name": "approvedLamportsAmountForEmployee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesEmployeeWithdrawalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "receiverEmployeeWallet",
            "type": "pubkey"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payrollsBonusesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "currentPaymentBatchType",
            "type": {
              "defined": {
                "name": "paymentBatchType"
              }
            }
          },
          {
            "name": "employeesStack",
            "type": {
              "vec": {
                "defined": {
                  "name": "payrollsBonusesEmployee"
                }
              }
            }
          },
          {
            "name": "isEmployeesListApprovedByAuth",
            "type": "bool"
          },
          {
            "name": "currentTxBatchIndex",
            "type": "u64"
          },
          {
            "name": "isWithdrawalRoundActive",
            "type": "bool"
          },
          {
            "name": "totalEmployees",
            "type": "u64"
          },
          {
            "name": "totalLastPayrollLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "totalPayrollLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "countOfPayrollLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "totalLastBonusLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "totalBonusLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "countOfBonusLamportsTransferredToEmployees",
            "type": "u64"
          },
          {
            "name": "currentTotalLamportsBalanceOfPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsFromPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsFromPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountFromPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsReceivedFromTreasuryPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsReceivedFromTreasuryPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsReceivedFromTreasuryPdaToPayrollsBonusesPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payrollsBonusesPda",
            "type": "pubkey"
          },
          {
            "name": "payrollsBonusesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPayrollsBonusesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newPayrollsBonusesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaBalanceSyncEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaBalanceUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamports",
            "type": "u64"
          },
          {
            "name": "countOfIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaBatchWithdrawalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "batchTotalLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payrollsBonusesPda",
            "type": "pubkey"
          },
          {
            "name": "payrollsBonusesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "payrollsBonusesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "payrollsBonusesPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "batchType",
            "type": {
              "defined": {
                "name": "paymentBatchType"
              }
            }
          },
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "totalBatchWithdrawnLamports",
            "type": "u64"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "periodDurationUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPeriodDurationSeconds",
            "type": "u64"
          },
          {
            "name": "newPeriodDurationSeconds",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformExpensesBalanceUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamports",
            "type": "u64"
          },
          {
            "name": "countOfIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "approvePlatformExpensesWithdrawalRequestByAuth",
            "type": {
              "defined": {
                "name": "approvePlatformExpensesWithdrawalRequestByAuth"
              }
            }
          },
          {
            "name": "currentTotalLamportsBalanceOfPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsFromPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsFromPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountFromPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsReceivedFromTreasuryPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsReceivedFromTreasuryPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsReceivedFromTreasuryPdaToPlatformExpensesPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformExpensesPda",
            "type": "pubkey"
          },
          {
            "name": "platformExpensesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPlatformExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newPlatformExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformExpensesPda",
            "type": "pubkey"
          },
          {
            "name": "platformExpensesPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "platformExpensesVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPdaWithdrawalApproved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "approver",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformExpensesPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "receiver",
            "type": "pubkey"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformFeeVaultPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformFeeVaultPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "periodStartTimestamp",
            "type": "i64"
          },
          {
            "name": "periodDurationSeconds",
            "type": "u64"
          },
          {
            "name": "currentTotalLamportsBalanceOfPlatformFeeVaultPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToPlatformFeeVaultPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformFeeVaultPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformFeeVaultPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformFeeVaultPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformFeeVaultPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformFeeVaultPda",
            "type": "pubkey"
          },
          {
            "name": "platformFeeVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformFeeVaultPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPlatformFeeVaultPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newPlatformFeeVaultPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformFeeVaultPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformFeeVaultPda",
            "type": "pubkey"
          },
          {
            "name": "platformFeeVaultPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "platformFeeVault",
            "type": "pubkey"
          },
          {
            "name": "periodStartTimestamp",
            "type": "i64"
          },
          {
            "name": "periodDurationSeconds",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformFeeVaultPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "receiver",
            "type": "pubkey"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformInitializationCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initializer",
            "type": "pubkey"
          },
          {
            "name": "platformGenesisTimestamp",
            "type": "i64"
          },
          {
            "name": "initializedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "platformInitializationStarted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initializer",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "platformMaintenanceModeDisabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isPlatformMaintenanceModeEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformMaintenanceModeEnabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isPlatformMaintenanceModeEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsIncomeUpdateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeLamportsToPlatformPayments",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToPlatformPayments",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountToPlatformPayments",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalanceOfPlatformPayments",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToGovernmentTax",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToMarketingExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToNetProfit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToPayrollsBonuses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToPlatformExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsOutcomeToTreasury",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformPaymentsPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "shareholders",
            "type": {
              "vec": {
                "defined": {
                  "name": "shareholder"
                }
              }
            }
          },
          {
            "name": "isShareholderListApprovedByAuth",
            "type": "bool"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToTreasuryPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToTreasuryPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToTreasuryPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPdaToNetProfitPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPdaToNetProfitPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPdaToNetProfitPda",
            "type": "u64"
          },
          {
            "name": "currentTotalLamportsBalanceOfPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfPlatformPaymentsPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfPlatformPaymentsPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformPaymentsPda",
            "type": "pubkey"
          },
          {
            "name": "platformPaymentsVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPlatformPaymentsPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newPlatformPaymentsPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformPaymentsPda",
            "type": "pubkey"
          },
          {
            "name": "platformPaymentsPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "platformPaymentsVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "shareholders",
            "type": {
              "vec": {
                "defined": {
                  "name": "shareholderWithdrawalData"
                }
              }
            }
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsShareholderInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholderName",
            "type": "string"
          },
          {
            "name": "shareholderPdaWallet",
            "type": "pubkey"
          },
          {
            "name": "shareholderPercentageBps",
            "type": "u16"
          },
          {
            "name": "isShareholderTicked",
            "type": "bool"
          },
          {
            "name": "shareholderAmountInLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "platformPaymentsShareholdersBpsUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholders",
            "type": {
              "vec": {
                "defined": {
                  "name": "shareholderEvent"
                }
              }
            }
          },
          {
            "name": "updater",
            "type": "pubkey"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "platformRegistryEntryInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pdaName",
            "type": "string"
          },
          {
            "name": "pdaAddress",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformRegistryPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isProgramInitialized",
            "type": "bool"
          },
          {
            "name": "pdas",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "registryEntry"
                  }
                },
                12
              ]
            }
          },
          {
            "name": "platformGenesisTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "platformRegistryPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformRegistryPda",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "poolMigrationAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldPoolMigrationAuth",
            "type": "pubkey"
          },
          {
            "name": "newPoolMigrationAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "priceFeedMessage",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feedId",
            "docs": [
              "`FeedId` but avoid the type alias because of compatibility issues with Anchor's `idl-build` feature."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "price",
            "type": "i64"
          },
          {
            "name": "conf",
            "type": "u64"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "publishTime",
            "docs": [
              "The timestamp of this price update in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "prevPublishTime",
            "docs": [
              "The timestamp of the previous price update. This field is intended to allow users to",
              "identify the single unique price update for any moment in time:",
              "for any time t, the unique update is the one such that prev_publish_time < t <= publish_time.",
              "",
              "Note that there may not be such an update while we are migrating to the new message-sending logic,",
              "as some price updates on pythnet may not be sent to other chains (because the message-sending",
              "logic may not have triggered). We can solve this problem by making the message-sending mandatory",
              "(which we can do once publishers have migrated over).",
              "",
              "Additionally, this field may be equal to publish_time if the message is sent on a slot where",
              "where the aggregation was unsuccesful. This problem will go away once all publishers have",
              "migrated over to a recent version of pyth-agent."
            ],
            "type": "i64"
          },
          {
            "name": "emaPrice",
            "type": "i64"
          },
          {
            "name": "emaConf",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "priceUpdateV2",
      "docs": [
        "A price update account. This account is used by the Pyth Receiver program to store a verified price update from a Pyth price feed.",
        "It contains:",
        "- `write_authority`: The write authority for this account. This authority can close this account to reclaim rent or update the account to contain a different price update.",
        "- `verification_level`: The [`VerificationLevel`] of this price update. This represents how many Wormhole guardian signatures have been verified for this price update.",
        "- `price_message`: The actual price update.",
        "- `posted_slot`: The slot at which this price update was posted."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "writeAuthority",
            "type": "pubkey"
          },
          {
            "name": "verificationLevel",
            "type": {
              "defined": {
                "name": "verificationLevel"
              }
            }
          },
          {
            "name": "priceMessage",
            "type": {
              "defined": {
                "name": "priceFeedMessage"
              }
            }
          },
          {
            "name": "postedSlot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "programUpgradeAuthPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programUpgradePdaAuth",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programUpgradeAuthPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programUpgradeAuthPda",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programUpgradePdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldProgramUpgradePdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newProgramUpgradePdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programUpgradePdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programUpgradePda",
            "type": "pubkey"
          },
          {
            "name": "programUpgradePdaAuth",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "registryEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pdaAddress",
            "type": "pubkey"
          },
          {
            "name": "pdaName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "salesAutoEndingDurationUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldSalesAutoEndingDuration",
            "type": "u64"
          },
          {
            "name": "newSalesAutoEndingDuration",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "shareholder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholderPdaWallet",
            "type": "pubkey"
          },
          {
            "name": "shareholderName",
            "type": "string"
          },
          {
            "name": "shareholderPercentageBps",
            "type": "u16"
          },
          {
            "name": "isShareholderTicked",
            "type": "bool"
          },
          {
            "name": "shareholderAmountInLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "shareholderEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholderPdaWallet",
            "type": "pubkey"
          },
          {
            "name": "shareholderName",
            "type": "string"
          },
          {
            "name": "shareholderBps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "shareholderListApprovedByAuth",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "approver",
            "type": "pubkey"
          },
          {
            "name": "totalBalanceInLamports",
            "type": "u64"
          },
          {
            "name": "originalNetprofitBps",
            "type": "u64"
          },
          {
            "name": "adjustedNetprofitBps",
            "type": "u64"
          },
          {
            "name": "shareholders",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "newShareholderEvent"
                  }
                },
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "shareholderWithdrawalData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shareholderPdaWallet",
            "type": "pubkey"
          },
          {
            "name": "shareholderName",
            "type": "string"
          },
          {
            "name": "transferredLamportsAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeholder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeholderWallet",
            "type": "pubkey"
          },
          {
            "name": "stakeholderName",
            "type": "string"
          },
          {
            "name": "stakeholderPercentageBps",
            "type": "u16"
          },
          {
            "name": "isStakeholderTicked",
            "type": "bool"
          },
          {
            "name": "stakeholderAmountInLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeholderAdded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bps",
            "type": "u16"
          },
          {
            "name": "totalStakeholders",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeholderApprovalEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeholderWallet",
            "type": "pubkey"
          },
          {
            "name": "stakeholderName",
            "type": "string"
          },
          {
            "name": "usedBps",
            "type": "u16"
          },
          {
            "name": "amountInLamports",
            "type": "u64"
          },
          {
            "name": "approver",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "stakeholderRemoved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "totalStakeholders",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakeholderUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "newWallet",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "newName",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "newBps",
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "stakeholdersAction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "add",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              },
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "bps",
                "type": "u16"
              }
            ]
          },
          {
            "name": "update",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              },
              {
                "name": "newWallet",
                "type": {
                  "option": "pubkey"
                }
              },
              {
                "name": "newName",
                "type": {
                  "option": "string"
                }
              },
              {
                "name": "newBps",
                "type": {
                  "option": "u16"
                }
              }
            ]
          },
          {
            "name": "remove",
            "fields": [
              {
                "name": "wallet",
                "type": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "tokenCreatorIncentiveDisabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isTokenCreatorIncentiveEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "tokenCreatorIncentiveEnabled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isTokenCreatorIncentiveEnabled",
            "type": "bool"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "tokenCreatorIncentiveUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldTokenCreatorIncentive",
            "type": "u64"
          },
          {
            "name": "newTokenCreatorIncentive",
            "type": "u64"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "treasuryIncomeUpdateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalIncomeToTreasury",
            "type": "u64"
          },
          {
            "name": "lastIncomeToTreasury",
            "type": "u64"
          },
          {
            "name": "incomeCountToTreasury",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryOutcomeToGovernmentTax",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "transferredLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryOutcomeToMarketingExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "transferredLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryOutcomeToPayrollsBonuses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "transferredLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryOutcomeToPlatformExpenses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferred",
            "type": "u64"
          },
          {
            "name": "transferredLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasuryPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "approveTreasuryWithdrawalRequestByAuth",
            "type": {
              "defined": {
                "name": "approveTreasuryWithdrawalRequestByAuth"
              }
            }
          },
          {
            "name": "currentTotalLamportsBalanceOfTreasuryPda",
            "type": "u64"
          },
          {
            "name": "totalIncomeLamportsToTreasuryPda",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamportsFromTreasuryPda",
            "type": "u64"
          },
          {
            "name": "lastIncomeLamportsToTreasuryPda",
            "type": "u64"
          },
          {
            "name": "lastOutcomeLamportsFromTreasuryPda",
            "type": "u64"
          },
          {
            "name": "incomeLamportsCountOfTreasuryPda",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCountOfTreasuryPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsTransferredToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferredToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsTransferredToGovernmentTaxPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsTransferredToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferredToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsTransferredToPlatformExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsTransferredToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferredToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsTransferredToMarketingExpensesPda",
            "type": "u64"
          },
          {
            "name": "totalLamportsTransferredToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "lastLamportsTransferredToPayrollsBonusesPda",
            "type": "u64"
          },
          {
            "name": "countOfLamportsTransferredToPayrollsBonusesPda",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryPdaInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasuryPda",
            "type": "pubkey"
          },
          {
            "name": "treasuryVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "treasuryPdaAuthUpdated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldTreasuryPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "newTreasuryPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "updater",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "treasuryPdaFieldsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasuryPda",
            "type": "pubkey"
          },
          {
            "name": "treasuryPdaAuth",
            "type": "pubkey"
          },
          {
            "name": "treasuryVault",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "treasuryPdaWithdrawalApproved",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "approver",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "treasuryPdaWithdrawalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "withdrawnLamportsAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnBy",
            "type": "pubkey"
          },
          {
            "name": "withdrawnAt",
            "type": "i64"
          },
          {
            "name": "receiver",
            "type": "pubkey"
          },
          {
            "name": "fromPdaName",
            "type": "string"
          },
          {
            "name": "fromPdaAddress",
            "type": "pubkey"
          },
          {
            "name": "totalIncomeLamports",
            "type": "u64"
          },
          {
            "name": "totalOutcomeLamports",
            "type": "u64"
          },
          {
            "name": "currentLamportsBalance",
            "type": "u64"
          },
          {
            "name": "outcomeLamportsCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "verificationLevel",
      "docs": [
        "Pyth price updates are bridged to all blockchains via Wormhole.",
        "Using the price updates on another chain requires verifying the signatures of the Wormhole guardians.",
        "The usual process is to check the signatures for two thirds of the total number of guardians, but this can be cumbersome on Solana because of the transaction size limits,",
        "so we also allow for partial verification.",
        "",
        "This enum represents how much a price update has been verified:",
        "- If `Full`, we have verified the signatures for two thirds of the current guardians.",
        "- If `Partial`, only `num_signatures` guardian signatures have been checked.",
        "",
        "# Warning",
        "Using partially verified price updates is dangerous, as it lowers the threshold of guardians that need to collude to produce a malicious price update."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "partial",
            "fields": [
              {
                "name": "numSignatures",
                "type": "u8"
              }
            ]
          },
          {
            "name": "full"
          }
        ]
      }
    },
    {
      "name": "withdrawCompleted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenMintAddress",
            "type": "pubkey"
          },
          {
            "name": "withdrawerAddress",
            "type": "pubkey"
          },
          {
            "name": "withdrawAmountInLamports",
            "type": "u64"
          },
          {
            "name": "isSaleActive",
            "type": "bool"
          },
          {
            "name": "isSaleExpired",
            "type": "bool"
          },
          {
            "name": "saleExpiredAt",
            "type": "i64"
          },
          {
            "name": "withdrawCompletedAt",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
