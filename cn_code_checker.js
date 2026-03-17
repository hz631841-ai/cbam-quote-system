// Mock data for chemcheck24h.com CBAM CN Codes list (simplified version)
// Included codes from Iron, Steel, Aluminium, Cement, Fertilisers, Hydrogen
const cbamControlledCodes = [
    // Iron & Steel
    "7200", "7201", "7202", "7203", "7204", "7205", "7206", "7207", "7208", "7209", 
    "7210", "7211", "7212", "7213", "7214", "7215", "7216", "7217", "7218", "7219", 
    "7220", "7221", "7222", "7223", "7224", "7225", "7226", "7227", "7228", "7229",
    "7301", "7302", "7303", "7304", "7305", "7306", "7307", "7308", "7309", "7310", 
    "7311", "7318", "7326",
    
    // Aluminium
    "7601", "7603", "7604", "7605", "7606", "7607", "7608", "7609", "7610", "7611", 
    "7612", "7613", "7614", "7616",

    // Cement
    "25070080", "25231000", "25232100", "25232900", "25233000", "25239000",

    // Fertilisers
    "28080000", "28141000", "28142000", "28342100", "31021010", "31021090", "31022100", 
    "31022900", "31023010", "31023090", "31024010", "31024090", "31025000", "31026000", 
    "31028000", "31029000", "31051000", "31052010", "31052090", "31053000", "31054000", 
    "31055100", "31055900", "31056000", "31059020", "31059080",
    
    // Hydrogen
    "28041000"
];

function checkIsControlled(cnCode) {
    if (!cnCode) return null;
    cnCode = cnCode.replace(/\s/g, ''); // Remove spaces
    
    // Check if the code starts with any of our controlled prefixes
    for (let i = 0; i < cbamControlledCodes.length; i++) {
        const prefix = cbamControlledCodes[i];
        if (cnCode.startsWith(prefix)) {
            // Must provide at least as many digits as the rule prefix
            // Also checking if they put random letters, but generally numeric
            if (cnCode.length >= prefix.length) {
                return true;
            }
        }
    }
    
    // Special checking logic or API call to chemcheck24h would go here in production
    // Since we don't have access to their private API, we use strict prefix matching 
    return false;
}
