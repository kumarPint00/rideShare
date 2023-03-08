#!/bin/bash



echo "************ Package Ride chaincode **********" 
pushd /opt/gopath/src/github.com/chaincode/Ride/
GO111MODULE=on go mod vendor
popd

CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/users/Admin@org1.test.com/msp CORE_PEER_ADDRESS=peer0.org1.test.com:7051 CORE_PEER_LOCALMSPID="org1MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/peers/peer0.org1.test.com/tls/ca.crt 
peer lifecycle chaincode package Ride.tar.gz --path /opt/gopath/src/github.com/chaincode/Ride/ --lang golang --label Ride_1.0

echo "***************** Install Ride chaincode ***************"
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/users/Admin@org1.test.com/msp CORE_PEER_ADDRESS=peer0.org1.test.com:7051 CORE_PEER_LOCALMSPID="org1MSP" CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.test.com/peers/peer0.org1.test.com/tls/ca.crt 
peer lifecycle chaincode install Ride.tar.gz

