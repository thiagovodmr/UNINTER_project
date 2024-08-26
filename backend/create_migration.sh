#!/bin/bash

# Verifica se o argumento foi fornecido
if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <descrição>"
    exit 1
fi

# Obtém a descrição da migração
DESCRIPTION=$1

# Define o diretório de migração
MIGRATION_DIR="src/main/resources/db/migration"

# Verifica se o diretório de migração existe
if [ ! -d "$MIGRATION_DIR" ]; then
    echo "Diretório de migração não encontrado: $MIGRATION_DIR"
    exit 1
fi

# Cria um timestamp no formato YYYYMMDDHHMMSS
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Define o nome do arquivo de migração
FILENAME="V${TIMESTAMP}__${DESCRIPTION}.sql"

# Cria o arquivo de migração vazio
touch "$MIGRATION_DIR/$FILENAME"

echo "Migração criada: $FILENAME"
