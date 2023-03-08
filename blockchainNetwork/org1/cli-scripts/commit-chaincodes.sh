#!/bin/bash

   

                  echo "***************** Commit Ride Chaincode  ***************"
                  CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/users/Admin@org1.test.com/msp CORE_PEER_ADDRESS=peer1.org1.test.com:7051 CORE_PEER_LOCALMSPID="org1MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/peers/peer1.org1.test.com/tls/ca.crt 
                  peer lifecycle chaincode commit -o orderer1.orderer.test.com:7050 --ordererTLSHostnameOverride orderer1.orderer.test.com --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/orderer/tls/tlsca.orderer.test.com-cert.pem --channelID common --name Ride  --version 1.0 --sequence 1     --peerAddresses peer0.org1.test.com:7051 --peerAddresses peer0.org2.test.com:7051 --peerAddresses peer0.org3.test.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/peers/peer0.org1.test.com/tls/ca.crt --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org2.test.com/peers/peer0.org2.test.com/tls/ca.crt --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org3.test.com/peers/peer0.org3.test.com/tls/ca.crt --signature-policy "OR('org1MSP.peer','org2MSP.peer','org3MSP.peer')"

